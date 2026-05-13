
import { useState, useEffect, createContext, useContext } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, signInWithGoogle, logout } from '../lib/firebase';
import { doc, setDoc, getDoc, getDocFromServer, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/error-handler';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userRef = doc(db, 'users', firebaseUser.uid);
          const privateRef = doc(db, 'users', firebaseUser.uid, 'private', 'info');
          
          // Use getDocFromServer for initial check to avoid cache permission issues
          const userDoc = await getDocFromServer(userRef).catch(e => {
            console.warn("Retrying with standard getDoc...");
            return getDoc(userRef);
          }).catch(e => handleFirestoreError(e, OperationType.GET, `users/${firebaseUser.uid}`));

          if (!userDoc || !userDoc.exists()) {
            // Create Public Profile
            await setDoc(userRef, {
              uid: firebaseUser.uid,
              displayName: firebaseUser.displayName || 'Robot User',
              photoURL: firebaseUser.photoURL || '',
              totalSolved: 0,
              points: 0,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            }).catch(e => handleFirestoreError(e, OperationType.WRITE, `users/${firebaseUser.uid}`));

            // Create Private Info (PII)
            await setDoc(privateRef, {
              email: firebaseUser.email,
              updatedAt: serverTimestamp()
            }).catch(e => handleFirestoreError(e, OperationType.WRITE, `users/${firebaseUser.uid}/private/info`));
          } else {
            // Update Public Profile
            await setDoc(userRef, {
              updatedAt: serverTimestamp()
            }, { merge: true }).catch(e => handleFirestoreError(e, OperationType.WRITE, `users/${firebaseUser.uid}`));

            // Update Private Info
            await setDoc(privateRef, {
                email: firebaseUser.email,
                updatedAt: serverTimestamp()
            }, { merge: true }).catch(e => handleFirestoreError(e, OperationType.WRITE, `users/${firebaseUser.uid}/private/info`));
          }
          setUser(firebaseUser);
        } catch (error) {
          console.error("Auth sync error:", error);
          // Don't block user if sync fails? 
          // Usually we set user anyway but logging is key.
          setUser(firebaseUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut: handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

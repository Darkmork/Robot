
import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FaUserCircle, FaEnvelope, FaBell, FaSignOutAlt } from 'react-icons/fa';
import DarkModeToggle from '../components/shared/DarkModeToggle';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/error-handler';

const ProfilePage: React.FC = () => {
  const { user, signOut } = useAuth();
  const [userStats, setUserStats] = useState({ totalSolved: 0, points: 0 });

  useEffect(() => {
    const fetchUserStats = async () => {
      if (!user) return;
      try {
        const userRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userRef).catch(e => handleFirestoreError(e, OperationType.GET, `users/${user.uid}`));
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserStats({
            totalSolved: data.totalSolved || 0,
            points: data.points || 0
          });
        }
      } catch (error) {
        console.error("Error fetching user stats:", error);
      }
    };
    fetchUserStats();
  }, [user]);

  if (!user) return null;

  return (
    <div className="container mx-auto max-w-2xl px-4">
      <div className="flex items-center mb-8">
        {user.photoURL ? (
          <img src={user.photoURL} alt={user.displayName || ''} className="w-16 h-16 rounded-full border-2 border-accent-sky mr-4" referrerPolicy="no-referrer" />
        ) : (
          <FaUserCircle size={64} className="text-accent-sky mr-4" />
        )}
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-slate-800 dark:text-slate-100">{user.displayName}</h1>
          <p className="text-slate-500 dark:text-slate-400 font-rajdhani">{user.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Problemas Resueltos</p>
          <p className="text-3xl font-orbitron font-bold text-accent-green">{userStats.totalSolved}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Puntos Totales</p>
          <p className="text-3xl font-orbitron font-bold text-accent-yellow">{userStats.points}</p>
        </Card>
      </div>

      <Card className="p-8 mb-6">
        <h2 className="text-2xl font-rajdhani font-semibold mb-6 text-slate-700 dark:text-slate-200">Información de la Cuenta</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
            <FaUserCircle className="text-accent-sky" />
            <span className="font-semibold">Nombre:</span> {user.displayName}
          </div>
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
            <FaEnvelope className="text-accent-sky" />
            <span className="font-semibold">Email:</span> {user.email}
          </div>
        </div>
      </Card>
      
      <Card className="p-8 mb-6">
        <h2 className="text-2xl font-rajdhani font-semibold mb-6 text-slate-700 dark:text-slate-200">Preferencias</h2>
        <div className="flex items-center justify-between mb-6">
          <span className="text-slate-700 dark:text-slate-300">Modo de Interfaz</span>
          <DarkModeToggle />
        </div>
      </Card>

      <div className="flex justify-center mt-8">
        <Button 
          variant="secondary" 
          onClick={signOut}
          leftIcon={<FaSignOutAlt />}
          className="bg-accent-red/10 text-accent-red hover:bg-accent-red/20 border-accent-red/30"
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;

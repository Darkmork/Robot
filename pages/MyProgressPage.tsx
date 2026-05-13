
import React, { useEffect, useState } from 'react';
import { FaUserGraduate, FaMedal, FaTasks, FaHistory } from 'react-icons/fa';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/error-handler';
import { MOCK_PROBLEMS } from '../constants';

const MyProgressPage: React.FC = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [recentSubmissions, setRecentSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      if (!user) return;
      try {
        // Fetch user basic data
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef).catch(e => handleFirestoreError(e, OperationType.GET, `users/${user.uid}`));
        if (userSnap && userSnap.exists()) {
          setUserData(userSnap.data());
        }

        // Fetch recent submissions
        const subsPath = `users/${user.uid}/submissions`;
        const subsRef = collection(db, 'users', user.uid, 'submissions');
        const q = query(subsRef, orderBy('timestamp', 'desc'), limit(5));
        const qSnap = await getDocs(q).catch(e => handleFirestoreError(e, OperationType.GET, subsPath));
        if (qSnap) {
            const fetchedSubs = qSnap.docs.map(doc => {
                const data = doc.data();
                const problem = MOCK_PROBLEMS.find(p => p.id === data.problemId);
                return {
                    id: doc.id,
                    ...data,
                    problemTitle: problem ? problem.title : 'Problema Desconocido'
                };
            });
            setRecentSubmissions(fetchedSubs);
        }
      } catch (error) {
        console.error("Error fetching progress:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-sky"></div>
      </div>
    );
  }

  const getLevel = (points: number) => {
    if (points >= 3000) return "Campeón 🏆";
    if (points >= 2000) return "Oro 🥇";
    if (points >= 1000) return "Plata 🥈";
    return "Bronce 🥉";
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-orbitron font-bold mb-8 text-center text-slate-800 dark:text-slate-100">Mi Progreso</h1>
      
      <Card className="p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {user?.photoURL ? (
            <img src={user.photoURL} alt={user.displayName || ''} className="w-20 h-20 rounded-full border-2 border-accent-sky mb-4 md:mb-0" referrerPolicy="no-referrer" />
          ) : (
            <FaUserGraduate size={80} className="text-accent-sky mb-4 md:mb-0" />
          )}
          <div>
            <h2 className="text-3xl font-rajdhani font-semibold text-slate-800 dark:text-slate-100">{userData?.displayName || 'Usuario'}</h2>
            <p className="text-xl text-accent-yellow">{getLevel(userData?.points || 0)}</p>
            <p className="text-slate-600 dark:text-slate-400">{userData?.points || 0} Puntos</p>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="p-6">
          <div className="flex items-center mb-3">
            <FaTasks size={24} className="text-accent-green mr-3" />
            <h3 className="text-xl font-rajdhani font-semibold text-slate-700 dark:text-slate-200">Problemas Resueltos</h3>
          </div>
          <p className="text-4xl font-orbitron text-slate-800 dark:text-slate-100">{userData?.totalSolved || 0}</p>
          <p className="text-slate-500 dark:text-slate-400">¡Sigue así!</p>
        </Card>
        
        <Card className="p-6">
           <div className="flex items-center mb-3">
            <FaMedal size={24} className="text-accent-yellow mr-3" />
            <h3 className="text-xl font-rajdhani font-semibold text-slate-700 dark:text-slate-200">Insignias</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 italic">Más insignias próximamente...</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center mb-4">
            <FaHistory size={24} className="text-accent-sky mr-3" />
            <h3 className="text-xl font-rajdhani font-semibold text-slate-700 dark:text-slate-200">Actividad Reciente</h3>
        </div>
        
        {recentSubmissions.length > 0 ? (
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">Problema</th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">Estado</th>
                            <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500 uppercase">Fecha</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {recentSubmissions.map(sub => (
                            <tr key={sub.id}>
                                <td className="px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">{sub.problemTitle}</td>
                                <td className="px-4 py-3 text-sm">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${sub.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {sub.status === 'success' ? 'Logrado' : 'Fallido'}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-xs text-slate-500">
                                    {sub.timestamp?.toDate().toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : (
            <p className="text-slate-500 dark:text-slate-400">No hay actividad reciente para mostrar.</p>
        )}
      </Card>
    </div>
  );
};

export default MyProgressPage;
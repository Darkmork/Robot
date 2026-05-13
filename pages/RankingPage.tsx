
import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import { FaTrophy } from 'react-icons/fa';
import { db } from '../lib/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/error-handler';

interface UserRank {
  uid: string;
  displayName: string;
  points: number;
  totalSolved: number;
}

const RankingPage: React.FC = () => {
  const [rankings, setRankings] = useState<UserRank[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, orderBy('points', 'desc'), limit(50));
        const querySnapshot = await getDocs(q).catch(e => handleFirestoreError(e, OperationType.GET, 'users'));
        const fetchedRankings = querySnapshot.docs.map(doc => ({
          uid: doc.id,
          ...doc.data()
        })) as UserRank[];
        setRankings(fetchedRankings);
      } catch (error) {
        console.error("Error fetching rankings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

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
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <FaTrophy size={60} className="mx-auto text-accent-yellow mb-4" />
        <h1 className="text-4xl font-orbitron font-bold text-slate-800 dark:text-slate-100">Tabla de Clasificación</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">¡Compite con otros programadores y escala posiciones!</p>
      </div>

      <Card className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider font-rajdhani">
                Posición
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider font-rajdhani">
                Usuario
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider font-rajdhani">
                Nivel
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider font-rajdhani">
                Puntos
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-secondary-dark divide-y divide-slate-200 dark:divide-slate-700">
            {rankings.map((u, index) => {
              const rank = index + 1;
              return (
                <tr key={u.uid} className={`${rank <= 3 ? 'bg-yellow-50 dark:bg-yellow-900/20' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">
                    <span className={`font-orbitron ${
                      rank === 1 ? 'text-yellow-500' : 
                      rank === 2 ? 'text-slate-400' : 
                      rank === 3 ? 'text-yellow-600' : ''
                    }`}>
                      {rank}
                      {rank === 1 && ' 👑'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300 font-semibold">{u.displayName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">{getLevel(u.points || 0)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 font-orbitron">{u.points || 0}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      
      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
        El ranking se actualiza periódicamente. ¡Sigue practicando para mejorar tu posición!
      </p>
    </div>
  );
};

export default RankingPage;

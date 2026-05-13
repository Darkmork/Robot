
import React, { useEffect, useState } from 'react';
import SkillRadarChart from '../components/stats/RadarChart';
import { MOCK_PROBLEMS, MOCK_THEMES } from '../constants';
import Card from '../components/ui/Card';
import { FaChartBar, FaCheckCircle, FaPercentage } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/error-handler';

const StatsPage: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalAttempts: 0,
    successfulAttempts: 0,
    radarData: [] as any[]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;
      try {
        const subsPath = `users/${user.uid}/submissions`;
        const subsRef = collection(db, 'users', user.uid, 'submissions');
        const q = query(subsRef);
        const qSnap = await getDocs(q).catch(e => handleFirestoreError(e, OperationType.GET, subsPath));
        const submissions = qSnap ? qSnap.docs.map(doc => doc.data()) : [];

        const totalAttempts = submissions.length;
        const successfulAttempts = submissions.filter(s => s.status === 'success').length;

        // Group by theme/skill
        const themeProgress: any = {};
        MOCK_THEMES.forEach(theme => {
            themeProgress[theme.id] = {
                skillName: theme.name,
                solved: new Set(), // Using Set to count unique solved problems
                total: MOCK_PROBLEMS.filter(p => p.topic === theme.id).length
            };
        });

        submissions.forEach(sub => {
            if (sub.status === 'success') {
                const problem = MOCK_PROBLEMS.find(p => p.id === sub.problemId);
                if (problem && themeProgress[problem.topic]) {
                    themeProgress[problem.topic].solved.add(sub.problemId);
                }
            }
        });

        const radarData = Object.values(themeProgress).map((tp: any) => {
            const solvedCount = tp.solved.size;
            return {
                skillName: tp.skillName,
                solved: solvedCount,
                total: tp.total,
                level: tp.total > 0 ? Math.floor((solvedCount / tp.total) * 100) : 0
            };
        });

        setStats({
          totalAttempts,
          successfulAttempts,
          radarData
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-sky"></div>
      </div>
    );
  }

  const successRate = stats.totalAttempts > 0 ? (stats.successfulAttempts / stats.totalAttempts) * 100 : 0;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-orbitron font-bold mb-8 text-center text-slate-800 dark:text-slate-100">Estadísticas de Rendimiento</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8 px-4">
        <Card className="p-6">
          <div className="flex items-center mb-2">
            <FaChartBar size={20} className="text-accent-sky mr-3" />
            <h3 className="text-lg font-rajdhani font-semibold text-slate-700 dark:text-slate-200">Intentos Totales</h3>
          </div>
          <p className="text-3xl font-orbitron text-slate-800 dark:text-slate-100">{stats.totalAttempts}</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center mb-2">
            <FaCheckCircle size={20} className="text-accent-green mr-3" />
            <h3 className="text-lg font-rajdhani font-semibold text-slate-700 dark:text-slate-200">Soluciones Correctas</h3>
          </div>
          <p className="text-3xl font-orbitron text-slate-800 dark:text-slate-100">{stats.successfulAttempts}</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center mb-2">
            <FaPercentage size={20} className="text-accent-yellow mr-3" />
            <h3 className="text-lg font-rajdhani font-semibold text-slate-700 dark:text-slate-200">Tasa de Éxito</h3>
          </div>
          <p className="text-3xl font-orbitron text-slate-800 dark:text-slate-100">{successRate.toFixed(1)}%</p>
        </Card>
      </div>

      <Card className="p-6 mb-8 mx-4">
        <h2 className="text-2xl font-orbitron font-semibold mb-4 text-slate-800 dark:text-slate-100">Distribución de Habilidades</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Visualiza tu competencia en diferentes áreas de la programación basado en tus problemas resueltos.
        </p>
        <SkillRadarChart data={stats.radarData} />
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-orbitron font-semibold mb-4 text-slate-800 dark:text-slate-100">Historial Detallado</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Aquí se mostrará un historial detallado de intentos por problema y tasas de éxito por nivel de dificultad. (Más estadísticas detalladas próximamente)
        </p>
        {/* Placeholder for more detailed stats tables or charts */}
      </Card>
    </div>
  );
};

export default StatsPage;
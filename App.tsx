
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import { AuthProvider } from './hooks/useAuth';
import ProtectedRoute from './components/layout/ProtectedRoute';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ThemesPage from './pages/ThemesPage';
import ProblemSetPage from './pages/ProblemSetPage';
import ProblemSolvingPage from './pages/ProblemSolvingPage';
import MyProgressPage from './pages/MyProgressPage';
import StatsPage from './pages/StatsPage';
import RankingPage from './pages/RankingPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from "./constants";


const App: React.FC = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <AuthProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.THEMES} element={<ThemesPage />} />
            <Route path={`${ROUTES.THEMES}/:themeId`} element={<ProblemSetPage />} />
            <Route path={`${ROUTES.PROBLEM}/:problemId`} element={<ProblemSolvingPage />} />
            
            {/* Protected Routes */}
            <Route path={ROUTES.PROGRESS} element={<ProtectedRoute><MyProgressPage /></ProtectedRoute>} />
            <Route path={ROUTES.STATS} element={<ProtectedRoute><StatsPage /></ProtectedRoute>} />
            <Route path={ROUTES.RANKING} element={<RankingPage />} />
            <Route path={ROUTES.PROFILE} element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
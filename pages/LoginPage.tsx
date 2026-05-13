
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES, APP_NAME, APP_SUBTITLE } from '../constants';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { FaGoogle, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  const { user, signIn, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || ROUTES.HOME;

  useEffect(() => {
    if (user && !loading) {
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-sky"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <Card className="p-8 text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-xl border-t-4 border-accent-sky">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-accent-sky/10 rounded-full animate-float">
              <FaRobot className="text-6xl text-accent-sky" />
            </div>
          </div>
          
          <h1 className="text-3xl font-orbitron font-bold mb-2 text-slate-800 dark:text-white">
            {APP_NAME}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            {APP_SUBTITLE}
          </p>
          
          <div className="space-y-4">
            <p className="text-sm font-rajdhani text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Inicia sesión para guardar tu progreso
            </p>
            
            <Button
              onClick={signIn}
              variant="primary"
              className="w-full flex items-center justify-center gap-3 py-6 text-lg hover:scale-105 transition-transform"
              leftIcon={<FaGoogle className="text-xl" />}
            >
              Continuar con Google
            </Button>
          </div>
          
          <p className="mt-8 text-xs text-slate-400 dark:text-slate-500">
            Al continuar, aceptas que guardemos tu progreso de forma automática.
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;

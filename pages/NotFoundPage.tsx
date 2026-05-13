
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center px-4">
      <FaExclamationTriangle size={80} className="text-accent-red mb-6" />
      <h1 className="text-6xl font-orbitron font-bold text-slate-800 dark:text-slate-100 mb-4">404</h1>
      <h2 className="text-3xl font-rajdhani font-semibold text-slate-700 dark:text-slate-300 mb-6">Página No Encontrada</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Button 
        variant="primary"
        size="lg"
        onClick={() => {}} // Placeholder, Link handles navigation
        className="bg-gradient-to-r from-sky-500 to-blue-700"
      >
        <Link to={ROUTES.HOME} className="flex items-center">
          <FaHome className="mr-2" />
          Volver al Inicio
        </Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;

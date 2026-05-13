
import React from 'react';
import ThemeCard from '../components/challenges/ThemeCard';
import { MOCK_THEMES } from '../constants';

const ThemesPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-orbitron font-bold mb-8 text-center text-slate-800 dark:text-slate-100">Elige tu Desafío</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
        Explora diferentes temas de programación. Cada tema contiene una serie de problemas diseñados para fortalecer tus habilidades específicas.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_THEMES.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </div>
       {MOCK_THEMES.length === 0 && (
        <p className="text-center text-slate-500 dark:text-slate-400 col-span-full">
          Actualmente no hay temas disponibles. ¡Vuelve pronto!
        </p>
      )}
    </div>
  );
};

export default ThemesPage;

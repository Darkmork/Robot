
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../types';
import Card from '../ui/Card';
import { ROUTES } from '../../constants';
import { FaChevronRight } from 'react-icons/fa';

interface ThemeCardProps {
  theme: Theme;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme }) => {
  const navigate = useNavigate();
  const IconComponent = theme.icon;

  return (
    <Card 
        className="p-6" 
        onClick={() => navigate(`${ROUTES.THEMES}/${theme.id}`)} 
        hoverEffect
    >
      <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:space-x-4">
        {IconComponent && (
          <div className="p-3 mb-4 md:mb-0 rounded-full bg-accent-sky/20 text-accent-sky dark:bg-accent-sky/30 dark:text-accent-sky">
            <IconComponent size={32} />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-2xl font-orbitron font-semibold text-slate-800 dark:text-slate-100 mb-2">{theme.name}</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm">{theme.description}</p>
          <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-500">
            <span>{theme.problemCount} Problemas</span>
            <FaChevronRight className="text-accent-sky" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ThemeCard;

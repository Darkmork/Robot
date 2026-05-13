
import React from 'react';
import { Link } from 'react-router-dom';
import { Problem } from '../../types';
import DifficultyIcon from './DifficultyIcon';
import { ROUTES } from '../../constants';
import Card from '../ui/Card';
import { FaChevronRight } from 'react-icons/fa';

interface ProblemItemProps {
  problem: Problem;
}

const ProblemItem: React.FC<ProblemItemProps> = ({ problem }) => {
  return (
    <Link to={`${ROUTES.PROBLEM}/${problem.id}`}>
      <Card className="p-4 mb-4" hoverEffect>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold font-orbitron text-slate-800 dark:text-slate-100">{problem.title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 truncate max-w-md">{problem.description}</p>
          </div>
          <div className="flex items-center space-x-3">
            <DifficultyIcon difficulty={problem.difficulty} size={28} />
            <FaChevronRight className="text-slate-400 dark:text-slate-500" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProblemItem;

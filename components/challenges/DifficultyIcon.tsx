import React from 'react';
import { FaRobot } from 'react-icons/fa';
import { Difficulty } from '../../types';

interface DifficultyIconProps {
  difficulty: Difficulty;
  size?: number;
}

const DifficultyIcon: React.FC<DifficultyIconProps> = ({ difficulty, size = 24 }) => {
  switch (difficulty) {
    case Difficulty.EASY:
      return <FaRobot size={size} className="text-accent-green" title="Fácil: Robot Amistoso"/>;
    case Difficulty.INTERMEDIATE:
      return <FaRobot size={size} className="text-accent-yellow" title="Intermedio: Robot Neutral"/>;
    case Difficulty.HARD:
      return <FaRobot size={size} className="text-accent-red animate-glowingEyes" title="Difícil: Robot de Batalla"/>;
    default:
      return null;
  }
};

export default DifficultyIcon;
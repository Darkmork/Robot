
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TypingAnimation from './TypingAnimation';
import Button from '../ui/Button';
import { ROUTES, APP_SUBTITLE, APP_NAME } from '../../constants';
import { FaRobot, FaChevronRight } from 'react-icons/fa';

// Simple SVG Robot Icon component
const AnimatedRobotIcon: React.FC<{className?: string}> = ({className}) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
      <div
        className={`relative ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaRobot
          size={180}
          className={`text-accent-yellow transition-all duration-300 transform ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        {/* Eyes and mouth elements removed as per user request */}
      </div>
    );
};


const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const appNameParts = APP_NAME.split(" ");
  const appNameFirstPart = appNameParts[0];
  const appNameSecondPart = appNameParts.slice(1).join(" ");

  return (
    <div className="text-center py-16 md:py-24 bg-gradient-to-b from-slate-100 dark:from-main-dark via-slate-50 dark:via-secondary-dark to-white dark:to-main-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <AnimatedRobotIcon className="mb-8 animate-float" />
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 text-slate-800 dark:text-slate-100">
            {appNameFirstPart} <span className="text-accent-sky">{appNameSecondPart}</span>
          </h1>
          <p className="text-lg md:text-2xl font-rajdhani text-slate-600 dark:text-slate-300 mb-10 max-w-2xl">
            <TypingAnimation text={APP_SUBTITLE} speed={70} />
          </p>
          <Button
            size="lg"
            variant="primary"
            onClick={() => navigate(ROUTES.THEMES)}
            rightIcon={<FaChevronRight />}
            className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            aria-label="Empezar desafíos de programación"
          >
            Empezar Desafíos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, hoverEffect = false }) => {
  const baseClasses = "bg-white dark:bg-secondary-dark shadow-lg rounded-xl overflow-hidden transition-all duration-300";
  const hoverClasses = hoverEffect ? "hover:shadow-2xl hover:scale-[1.02] dark:hover:bg-slate-700" : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
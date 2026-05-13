
import React, { useState } from 'react';
import { CREATOR_SIGNATURE } from '../../constants';

const Footer: React.FC = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleMouseEnter = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300); // Duration of the glitch animation
  };

  return (
    <footer className="bg-secondary-dark text-slate-400 py-8 text-center">
      <div className="container mx-auto">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} RobotCode Arena. Todos los derechos reservados.
        </p>
        <p>
          Creador: {' '}
          <span
            className={`font-orbitron text-accent-sky cursor-pointer inline-block ${isGlitching ? 'animate-glitch' : ''}`}
            onMouseEnter={handleMouseEnter}
          >
            {CREATOR_SIGNATURE}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
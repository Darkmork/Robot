
import React from 'react';
import { useThemeStore } from '../../store/themeStore';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
    >
      {theme === 'dark' ? <FaSun size={22} /> : <FaMoon size={22} />}
    </button>
  );
};

export default DarkModeToggle;


import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useThemeStore } from '../../store/themeStore';
import { useAuth } from '../../hooks/useAuth';
import { ROUTES, APP_NAME } from '../../constants';
import { FaSun, FaMoon, FaBars, FaTimes, FaRobot, FaSignOutAlt, FaUser } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: ROUTES.HOME, label: 'Home' },
    { path: ROUTES.THEMES, label: 'Temas' },
    { path: ROUTES.PROGRESS, label: 'Mi Progreso' },
    { path: ROUTES.STATS, label: 'Estadísticas' },
    { path: ROUTES.RANKING, label: 'Ranking' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate(ROUTES.HOME);
  };

  const activeClassName = "text-accent-sky dark:text-accent-sky font-bold";
  const inactiveClassName = "hover:text-accent-sky dark:hover:text-accent-sky transition-colors";

  return (
    <nav className="bg-secondary-dark shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to={ROUTES.HOME} className="flex items-center space-x-2 text-2xl font-orbitron text-white hover:text-accent-sky transition-colors">
            <FaRobot className="text-accent-yellow" size={28}/>
            <span>{APP_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? activeClassName : inactiveClassName) + " text-slate-200"}
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-slate-700 pl-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full text-slate-200 hover:bg-slate-700 transition-colors"
              >
                {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>

              {user ? (
                <div className="relative group">
                  <Link to={ROUTES.PROFILE} className="flex items-center space-x-2">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || 'User'} className="w-8 h-8 rounded-full border border-accent-sky" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-accent-sky">
                        <FaUser size={16} />
                      </div>
                    )}
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="absolute right-0 top-10 hidden group-hover:block bg-slate-800 text-white text-sm px-4 py-2 rounded shadow-xl hover:bg-slate-700 whitespace-nowrap z-50 transition-all border border-slate-700"
                  >
                    <div className="flex items-center gap-2">
                      <FaSignOutAlt /> Cerrar Sesión
                    </div>
                  </button>
                </div>
              ) : (
                <Link to={ROUTES.LOGIN} className="bg-accent-sky hover:bg-sky-500 text-slate-900 px-4 py-2 rounded font-bold transition-all text-sm uppercase tracking-wider">
                  Ingresar
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 mr-2 rounded-full text-slate-200 hover:bg-slate-700 transition-colors"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open mobile menu"
              className="text-slate-200 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 absolute w-full shadow-xl z-50">
          <ul className="flex flex-col items-center py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => (isActive ? activeClassName : inactiveClassName) + " text-slate-200 text-lg"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {user ? (
              <>
                <li>
                  <Link to={ROUTES.PROFILE} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-200 text-lg flex items-center gap-2">
                    <FaUser className="text-accent-sky" /> Mi Perfil
                  </Link>
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-accent-red text-lg flex items-center gap-2">
                    <FaSignOutAlt /> Salir
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to={ROUTES.LOGIN} onClick={() => setIsMobileMenuOpen(false)} className="bg-accent-sky text-slate-900 px-6 py-2 rounded font-bold uppercase tracking-wider">
                  Ingresar
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
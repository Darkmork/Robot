
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProblemItem from '../components/challenges/ProblemItem';
import DifficultyIcon from '../components/challenges/DifficultyIcon';
import { MOCK_PROBLEMS_BY_THEME, MOCK_THEMES, ROUTES } from '../constants';
import { Problem, Difficulty } from '../types';
import { FaArrowLeft, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Card from '../components/ui/Card';

const ProblemSetPage: React.FC = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const theme = MOCK_THEMES.find(t => t.id === themeId);
  const problemsForTheme: Problem[] = themeId ? MOCK_PROBLEMS_BY_THEME[themeId] || [] : [];

  React.useEffect(() => {
    // Inject styles for chevron rotation if not already present
    // This is a simple way to handle it for native <details>
    // A more React-idiomatic way might involve state for custom components
    // or Tailwind group-open utilities if <details> were the group parent.
    const styleId = 'details-chevron-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        details[open] > summary .details-chevron {
          transform: rotate(180deg);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  if (!theme) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Tema no encontrado</h2>
        <Link to={ROUTES.THEMES} className="text-accent-sky hover:underline">
          Volver a Temas
        </Link>
      </div>
    );
  }

  const easyProblems = problemsForTheme.filter(p => p.difficulty === Difficulty.EASY);
  const intermediateProblems = problemsForTheme.filter(p => p.difficulty === Difficulty.INTERMEDIATE);
  const hardProblems = problemsForTheme.filter(p => p.difficulty === Difficulty.HARD);

  const renderProblemList = (problemList: Problem[], difficulty: Difficulty, title: string, defaultOpen: boolean = false) => {
    return (
      <details className="mb-6 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md" open={defaultOpen && problemList.length > 0}>
        <summary className="list-none group"> {/* Remove default marker, add group for potential future Tailwind styling */}
          <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 rounded-t-lg transition-colors">
            <div className="flex items-center">
              <DifficultyIcon difficulty={difficulty} size={30} />
              <h2 className="text-2xl font-orbitron font-semibold ml-3 text-slate-700 dark:text-slate-200">{title}</h2>
              <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">({problemList.length} problemas)</span>
            </div>
            <FaChevronDown className="text-slate-500 dark:text-slate-400 transform transition-transform duration-200 details-chevron" />
          </div>
        </summary>
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 rounded-b-lg">
          {problemList.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400 text-center py-4">No hay problemas de dificultad {title.toLowerCase()} para este tema todavía.</p>
          ) : (
            <div className="space-y-4">
              {problemList.map((problem) => (
                <ProblemItem key={problem.id} problem={problem} />
              ))}
            </div>
          )}
        </div>
      </details>
    );
  };
  

  return (
    <div className="container mx-auto">
      <Link to={ROUTES.THEMES} className="inline-flex items-center text-accent-sky hover:text-sky-400 dark:hover:text-sky-300 mb-6 group">
        <FaArrowLeft className="mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
        Volver a Temas
      </Link>
      <h1 className="text-4xl font-orbitron font-bold mb-3 text-slate-800 dark:text-slate-100">{theme.name}</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">{theme.description}</p>
      
      {problemsForTheme.length > 0 ? (
        <>
          {renderProblemList(easyProblems, Difficulty.EASY, 'Fácil', true)} {/* Open Fácil by default */}
          {renderProblemList(intermediateProblems, Difficulty.INTERMEDIATE, 'Intermedio')}
          {renderProblemList(hardProblems, Difficulty.HARD, 'Difícil')}
        </>
      ) : (
        <Card className="p-10 text-center">
            <p className="text-xl text-slate-500 dark:text-slate-400">
            Aún no hay problemas para este tema. ¡Pronto añadiremos más!
            </p>
        </Card>
      )}
    </div>
  );
};

export default ProblemSetPage;

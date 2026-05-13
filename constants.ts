import { Theme, SkillProgress } from './types';
import { FaBook, FaKeyboard, FaListAlt, FaProjectDiagram, FaBrain, FaCogs, FaCube, FaChartPie, FaMicrochip } from 'react-icons/fa';
// Import problem data from the new structure
import { MOCK_PROBLEMS_BY_THEME, MOCK_PROBLEMS } from './constants/problems'; 

export { MOCK_PROBLEMS_BY_THEME, MOCK_PROBLEMS }; // Re-export for other modules

export const ROUTES = {
  HOME: '/',
  THEMES: '/themes',
  PROBLEM: '/problem', // Base for /problem/:problemId
  PROGRESS: '/progress',
  STATS: '/stats',
  RANKING: '/ranking',
  PROFILE: '/profile',
  LOGIN: '/login',
};

export const APP_NAME = "RobotCode Arena";
export const APP_SUBTITLE = "Resuelve. Aprende. Domina el código.";
export const CREATOR_SIGNATURE = "<JGdev/>";

export const MOCK_THEMES: Theme[] = [
  { id: 'conditionals', name: 'Condicionales', description: 'Domina el arte de la toma de decisiones en código.', icon: FaKeyboard, problemCount: MOCK_PROBLEMS_BY_THEME['conditionals']?.length || 0 },
  { id: 'loops', name: 'Bucles', description: 'Aprende a repetir tareas y procesar colecciones de datos.', icon: FaProjectDiagram, problemCount: MOCK_PROBLEMS_BY_THEME['loops']?.length || 0 },
  { id: 'functions', name: 'Funciones', description: 'Organiza tu código en bloques reutilizables.', icon: FaBook, problemCount: MOCK_PROBLEMS_BY_THEME['functions']?.length || 0 },
  { id: 'lists', name: 'Listas y Arrays', description: 'Maneja colecciones ordenadas de elementos.', icon: FaListAlt, problemCount: MOCK_PROBLEMS_BY_THEME['lists']?.length || 0 },
  { id: 'dictionaries', name: 'Diccionarios y Objetos', description: 'Trabaja con estructuras de datos clave-valor.', icon: FaBrain, problemCount: MOCK_PROBLEMS_BY_THEME['dictionaries']?.length || 0 },
  { id: 'algorithms', name: 'Algoritmos Básicos', description: 'Introduce conceptos fundamentales de algoritmos.', icon: FaCogs, problemCount: MOCK_PROBLEMS_BY_THEME['algorithms']?.length || 0 },
  { id: 'pythonClasses', name: 'Clases en Python (OOP)', description: 'Explora la Programación Orientada a Objetos: clases, objetos, herencia y más.', icon: FaCube, problemCount: MOCK_PROBLEMS_BY_THEME['pythonClasses']?.length || 0 },
  { id: 'dataScience', name: 'Ciencia de Datos con Python', description: 'Analiza datos con Pandas, realiza cálculos con NumPy y visualiza con Matplotlib.', icon: FaChartPie, problemCount: MOCK_PROBLEMS_BY_THEME['dataScience']?.length || 0 },
  { id: 'machineLearning', name: 'Intro al Aprendizaje Automático', description: 'Conceptos básicos y uso de Scikit-learn para modelos predictivos.', icon: FaMicrochip, problemCount: MOCK_PROBLEMS_BY_THEME['machineLearning']?.length || 0 },
];

// Mock data for radar chart in StatsPage
// Total should match problemCount for consistency
export const MOCK_RADAR_SKILLS_DATA: SkillProgress[] = MOCK_THEMES.map(theme => {
    const problemsForTheme = MOCK_PROBLEMS_BY_THEME[theme.id] || [];
    const currentProblemCount = problemsForTheme.length;
    // Simulate some progress for radar chart visual. 
    // In a real app, this would come from user data.
    const solvedProblems = currentProblemCount > 0 ? Math.floor(Math.random() * (currentProblemCount / 2)) : 0; 
    return {
        skillName: theme.name,
        solved: solvedProblems, 
        total: currentProblemCount,
        level: currentProblemCount > 0 ? Math.min(100, Math.floor((solvedProblems / currentProblemCount) * 100)) : 0
    };
});

// Ensure problemCount in MOCK_THEMES matches actual counts from MOCK_PROBLEMS_BY_THEME
// and that radar data reflects these counts.
MOCK_THEMES.forEach(theme => {
    const problemsForTheme = MOCK_PROBLEMS_BY_THEME[theme.id] || [];
    theme.problemCount = problemsForTheme.length;
    
    const radarSkill = MOCK_RADAR_SKILLS_DATA.find(skill => skill.skillName === theme.name);
    if (radarSkill) {
        radarSkill.total = theme.problemCount;
        if (radarSkill.solved > theme.problemCount) {
            // This part might need to be re-thought if "solved" comes from a different source
            // For now, ensure solved is not more than total if randomly generated higher initially.
            radarSkill.solved = Math.min(radarSkill.solved, theme.problemCount);
        }
        radarSkill.level = theme.problemCount > 0 ? Math.min(100, Math.floor((radarSkill.solved / theme.problemCount) * 100)) : 0;
    } else if (theme.problemCount > 0) { // Add new themes to radar data if not present
        const solvedProblems = Math.floor(Math.random() * (theme.problemCount / 2));
         MOCK_RADAR_SKILLS_DATA.push({
            skillName: theme.name,
            solved: solvedProblems,
            total: theme.problemCount,
            level: theme.problemCount > 0 ? Math.min(100, Math.floor((solvedProblems / theme.problemCount) * 100)) : 0
        });
    }
});
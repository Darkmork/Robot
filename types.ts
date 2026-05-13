
export enum Difficulty {
  EASY = 'Fácil',
  INTERMEDIATE = 'Intermedio',
  HARD = 'Difícil',
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  topic: string; // Corresponds to Theme id
  examples: Array<{ input: string; output: string; explanation?: string }>;
  defaultCode?: string;
  datasets?: Array<{ input: string; expectedOutput: string }>; // Hidden datasets
  authorSignature?: string; // Added author signature field
  hint?: string; // Added hint field for each problem
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  icon?: React.ElementType; // For an icon component
  problemCount: number; // Calculated or stored
}

export interface UserProfile {
  id: string;
  username: string;
  level: UserLevel;
  points: number;
  badges: Badge[];
  solvedProblems: string[]; // Array of problem IDs
}

export enum UserLevel {
  BRONZE = 'Bronce',
  SILVER = 'Plata',
  GOLD = 'Oro',
  CHAMPION = 'Campeón',
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // Icon name or path
}

export interface Submission {
  problemId: string;
  code: string;
  timestamp: number;
  status: 'success' | 'failure' | 'pending';
  output?: string;
  expectedOutput?: string;
  executionTime?: number; // ms
}

export interface SkillProgress {
  skillName: string; // e.g., 'Condicionales', 'Bucles'
  solved: number;
  total: number;
  level: number; // 0-100 for radar chart
}
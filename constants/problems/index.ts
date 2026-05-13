import { Problem } from '../../types';
import { conditionalProblems } from './conditionals';
import { loopProblems } from './loops';
import { functionProblems } from './functions';
import { listProblems } from './lists';
import { dictionaryProblems } from './dictionaries';
import { algorithmProblems } from './algorithms';
import { pythonClassesProblems } from './pythonClasses';
import { dataScienceProblems } from './dataScience';
import { machineLearningProblems } from './machineLearning';

export const MOCK_PROBLEMS_BY_THEME: Record<string, Problem[]> = {
  conditionals: conditionalProblems,
  loops: loopProblems,
  functions: functionProblems,
  lists: listProblems,
  dictionaries: dictionaryProblems,
  algorithms: algorithmProblems,
  pythonClasses: pythonClassesProblems,
  dataScience: dataScienceProblems,
  machineLearning: machineLearningProblems,
};

// Flattened list of all problems, ensure each problem has its topic from its source file
export const MOCK_PROBLEMS: Problem[] = Object.values(MOCK_PROBLEMS_BY_THEME).flat();

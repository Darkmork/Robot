
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CodeEditor from '../components/challenges/CodeEditor';
import DifficultyIcon from '../components/challenges/DifficultyIcon';
import { MOCK_PROBLEMS, MOCK_THEMES, ROUTES } from '../constants';
import { Problem } from '../types';
import Button from '../components/ui/Button';
import { FaPlay, FaLightbulb, FaCheckCircle, FaTimesCircle, FaArrowLeft } from 'react-icons/fa';
import Card from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs, doc, increment, updateDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/error-handler';

// Mock execution result
interface ExecutionResult {
  success: boolean;
  output: string;
  expected?: string;
  executionTime?: number; // ms
  error?: string;
}

const ProblemSolvingPage: React.FC = () => {
  const { problemId } = useParams<{ problemId: string }>();
  const { user } = useAuth();
  const [problem, setProblem] = useState<Problem | null>(null);
  const [code, setCode] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const foundProblem = MOCK_PROBLEMS.find(p => p.id === problemId);
    if (foundProblem) {
      setProblem(foundProblem);
      setCode(foundProblem.defaultCode || '');
    }
  }, [problemId]);

  const handleCodeChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleRunCode = async () => {
    if (!problem) return;
    setIsLoading(true);
    setExecutionResult(null);

    // Simulate API call / code execution
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    
    let isCorrect = false;
    let mockUserOutput = "Resultado no determinado";

    if (problem.datasets && problem.datasets.length > 0) {
        const firstDataset = problem.datasets[0];
        // Basic simulation logic
        if (problem.id === 'cond-easy-1' && code.includes("edad >= 18")) {
             isCorrect = true;
        } else if (problem.id === 'func-easy-1' && code.includes("Hola, ")) {
             isCorrect = true;
        } else {
             // For others, let's say simple presence of keywords works for demo
             isCorrect = code.length > 20; 
        }
        
        mockUserOutput = isCorrect ? firstDataset.expectedOutput : `Salida incorrecta. Tu código produjo una salida que no coincide con el resultado esperado.`;

        const result = {
            success: isCorrect,
            output: mockUserOutput,
            expected: firstDataset.expectedOutput,
            executionTime: Math.random() * 100 + 50,
        };
        setExecutionResult(result);
        
        if (user) {
            await saveSubmission(isCorrect, result.executionTime);
        }
    } else {
         isCorrect = code.length > 10; 
         const result = {
            success: isCorrect,
            output: isCorrect ? "¡Solución Correcta!" : "Intenta de nuevo mejorando tu lógica.",
            executionTime: Math.random() * 100 + 50,
        };
        setExecutionResult(result);

        if (user) {
            await saveSubmission(isCorrect, result.executionTime);
        }
    }

    setIsLoading(false);
  };

  const saveSubmission = async (success: boolean, execTime: number) => {
    if (!user || !problem) return;

    const submissionsPath = `users/${user.uid}/submissions`;
    const userPath = `users/${user.uid}`;

    try {
      // 1. Save submission record
      const submissionsRef = collection(db, 'users', user.uid, 'submissions');
      await addDoc(submissionsRef, {
        userId: user.uid,
        problemId: problem.id,
        code,
        status: success ? 'success' : 'failed',
        executionTime: execTime,
        timestamp: serverTimestamp()
      }).catch(e => handleFirestoreError(e, OperationType.WRITE, submissionsPath));

      // 2. If successful, check if it's the first time solved to update stats
      if (success) {
        const q = query(
          submissionsRef, 
          where('problemId', '==', problem.id), 
          where('status', '==', 'success')
        );
        const querySnapshot = await getDocs(q).catch(e => handleFirestoreError(e, OperationType.GET, submissionsPath));
        
        if (querySnapshot.size <= 1) {
            const userRef = doc(db, 'users', user.uid);
            await updateDoc(userRef, {
                totalSolved: increment(1),
                points: increment(problem.difficulty === 'easy' ? 10 : problem.difficulty === 'medium' ? 25 : 50),
                updatedAt: serverTimestamp()
            }).catch(e => handleFirestoreError(e, OperationType.WRITE, userPath));
        }
      }
    } catch (error) {
      console.error("Error saving submission:", error);
    }
  };

  if (!problem) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Problema no encontrado</h2>
        <Link to={ROUTES.THEMES} className="text-accent-sky hover:underline">
          Volver a Temas
        </Link>
      </div>
    );
  }
  
  const themeName = MOCK_THEMES.find(t => t.id === problem.topic)?.name || 'Problemas';

  return (
    <div className="container mx-auto">
      <Link to={`${ROUTES.THEMES}/${problem.topic}`} className="inline-flex items-center text-accent-sky hover:text-sky-400 dark:hover:text-sky-300 mb-6 group">
        <FaArrowLeft className="mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
        Volver a {themeName}
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Problem Description Area */}
        <div className="lg:w-1/2">
          <Card className="p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-orbitron font-bold text-slate-800 dark:text-slate-100">{problem.title}</h1>
                <DifficultyIcon difficulty={problem.difficulty} size={32} />
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-4 whitespace-pre-wrap">{problem.description}</p>
            
            <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-slate-200">Ejemplos:</h3>
            {problem.examples.map((ex, index) => (
              <div key={index} className="mb-3 p-3 bg-slate-100 dark:bg-slate-700 rounded text-sm">
                <p><strong className="font-mono">Input:</strong> <code className="font-mono text-accent-sky">{ex.input}</code></p>
                <p><strong className="font-mono">Output:</strong> <code className="font-mono text-accent-green">{ex.output}</code></p>
                {ex.explanation && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{ex.explanation}</p>}
              </div>
            ))}
            {problem.authorSignature && (
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-6 text-right italic">
                Problema creado por: {problem.authorSignature}
              </p>
            )}
          </Card>
          
          <Button 
            variant="ghost" 
            onClick={() => setShowHint(!showHint)} 
            leftIcon={<FaLightbulb />}
            className="w-full md:w-auto mb-6"
          >
            {showHint ? 'Ocultar Pista' : 'Mostrar Pista'}
          </Button>

          {showHint && (
            <Card className="p-4 mb-6 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700">
              <p className="text-yellow-700 dark:text-yellow-300 text-sm whitespace-pre-wrap">
                {problem.hint ? (
                  <>
                    <span className="font-bold">Pista:</span> {problem.hint}
                  </>
                ) : (
                  "No hay pista disponible para este problema."
                )}
              </p>
            </Card>
          )}
        </div>

        {/* Code Editor and Output Area */}
        <div className="lg:w-1/2">
          <CodeEditor initialCode={code} onChange={handleCodeChange} height="450px" />
          <Button 
            onClick={handleRunCode} 
            isLoading={isLoading} 
            leftIcon={<FaPlay />}
            className="w-full mt-4"
          >
            Ejecutar Código
          </Button>

          {executionResult && (
            <Card className={`mt-6 p-4 border-l-4 ${executionResult.success ? 'border-accent-green bg-green-50 dark:bg-green-900/30' : 'border-accent-red bg-red-50 dark:bg-red-900/30'}`}>
              <div className="flex items-center mb-2">
                {executionResult.success ? <FaCheckCircle className="text-accent-green mr-2" size={20}/> : <FaTimesCircle className="text-accent-red mr-2" size={20}/>}
                <h4 className={`text-xl font-semibold ${executionResult.success ? 'text-accent-green' : 'text-accent-red'}`}>
                  {executionResult.success ? '¡Éxito!' : 'Intento Fallido'}
                </h4>
              </div>
              {executionResult.error ? (
                 <p className="font-mono text-sm text-red-700 dark:text-red-300 whitespace-pre-wrap">{executionResult.error}</p>
              ) : (
                <>
                  <p className="font-mono text-sm text-slate-700 dark:text-slate-300"><strong>Tu Salida:</strong></p>
                  <pre className="bg-slate-100 dark:bg-slate-800 p-2 rounded my-1 text-sm whitespace-pre-wrap"><code className="font-mono">{executionResult.output}</code></pre>
                  {!executionResult.success && executionResult.expected && (
                    <>
                    <p className="font-mono text-sm text-slate-500 dark:text-slate-400"><strong>Salida Esperada:</strong></p>
                    <pre className="bg-slate-100 dark:bg-slate-800 p-2 rounded my-1 text-sm whitespace-pre-wrap"><code className="font-mono">{executionResult.expected}</code></pre>
                    </>
                  )}
                  {executionResult.executionTime && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Tiempo de ejecución: {executionResult.executionTime.toFixed(2)} ms</p>
                  )}
                </>
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolvingPage;
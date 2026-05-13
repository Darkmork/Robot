
import React from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { useThemeStore } from '../../store/themeStore';

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  onChange?: (value: string | undefined) => void;
  height?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  initialCode = '', 
  language = 'python', 
  onChange,
  height = '400px' 
}) => {
  const { theme } = useThemeStore();

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    // You can use the editor instance here if needed
    // Example: editor.focus();
    // Configure monaco editor options
     monaco.editor.defineTheme('dark-custom', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
            'editor.background': '#1E293B' // secondary-dark
        }
    });
     monaco.editor.defineTheme('light-custom', {
        base: 'vs',
        inherit: true,
        rules: [],
        colors: {
            // 'editor.background': '#FFFFFF'
        }
    });
  };

  return (
    <div className="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
      <Editor
        height={height}
        language={language}
        value={initialCode}
        onChange={onChange}
        theme={theme === 'dark' ? 'dark-custom' : 'light-custom'}
        onMount={handleEditorDidMount}
        options={{
          selectOnLineNumbers: true,
          minimap: { enabled: true },
          fontSize: 14,
          fontFamily: "Fira Code, JetBrains Mono, Source Code Pro, monospace",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          wordWrap: "on",
        }}
      />
    </div>
  );
};

export default CodeEditor;


import {create} from 'zustand';

type ThemeState = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
};

export const useThemeStore = create<ThemeState>((set) => {
  const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', initialTheme);

  return {
    theme: initialTheme,
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { theme: newTheme };
      }),
    setTheme: (theme) =>
      set(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { theme };
      }),
  };
});

// Initialize the store by importing it once, e.g., in App.tsx or index.tsx
// This ensures the initial theme is set based on localStorage/media query
if (document.documentElement.classList.contains('dark')) {
    useThemeStore.getState().setTheme('dark');
} else {
    useThemeStore.getState().setTheme('light');
}
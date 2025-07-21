import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'system',
  storageKey = 'portfolio-theme',
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

  // Get system preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  };

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey) as Theme;
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        setTheme(stored);
      }
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
    }
  }, [storageKey]);

  // Update resolved theme when theme or system preference changes
  useEffect(() => {
    const updateResolvedTheme = () => {
      const newResolvedTheme = theme === 'system' ? getSystemTheme() : theme;
      setResolvedTheme(newResolvedTheme);
      
      // Update document class and data attributes
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newResolvedTheme);
      root.setAttribute('data-theme', newResolvedTheme);
      
      // Apply theme styles directly to body for immediate effect with smooth transitions
      const body = document.body;
      body.style.transition = 'background 0.5s ease-in-out, color 0.3s ease-in-out';
      
      if (newResolvedTheme === 'light') {
        // Light theme styles - clean white, soft grays, smooth blue accents
        body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)';
        body.style.color = '#1e293b';
        
        // Update CSS custom properties for light theme
        root.style.setProperty('--bg-primary', '#ffffff');
        root.style.setProperty('--bg-secondary', '#f8fafc');
        root.style.setProperty('--bg-tertiary', '#e2e8f0');
        root.style.setProperty('--text-primary', '#1e293b');
        root.style.setProperty('--text-secondary', '#475569');
        root.style.setProperty('--text-accent', '#3b82f6');
        root.style.setProperty('--border-color', '#e2e8f0');
        root.style.setProperty('--shadow-color', 'rgba(148, 163, 184, 0.15)');
        root.style.setProperty('--blue-primary', '#3b82f6');
        root.style.setProperty('--blue-secondary', '#60a5fa');
        root.style.setProperty('--gradient-from', '#f8fafc');
        root.style.setProperty('--gradient-to', '#e2e8f0');
      } else {
        // Dark theme styles (enhanced) - deep navy, black, electric blue highlights
        body.style.background = 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)';
        body.style.color = '#ffffff';
        
        // Update CSS custom properties for dark theme
        root.style.setProperty('--bg-primary', '#020617');
        root.style.setProperty('--bg-secondary', '#0f172a');
        root.style.setProperty('--bg-tertiary', '#1e293b');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#cbd5e1');
        root.style.setProperty('--text-accent', '#60a5fa');
        root.style.setProperty('--border-color', '#1e293b');
        root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
        root.style.setProperty('--blue-primary', '#3b82f6');
        root.style.setProperty('--blue-secondary', '#60a5fa');
        root.style.setProperty('--gradient-from', '#020617');
        root.style.setProperty('--gradient-to', '#0f172a');
      }
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          'content',
          newResolvedTheme === 'light' ? '#f8fafc' : '#020617'
        );
      }
    };

    updateResolvedTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateResolvedTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Save theme preference to localStorage
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: updateTheme,
        resolvedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
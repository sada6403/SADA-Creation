import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    } else {
      // Default to dark theme if no saved preference
      setTheme('dark');
    }
  }, []);

  // Apply theme to body and save to localStorage whenever theme changes
  useEffect(() => {
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('light', 'dark');
    
    // Add current theme class
    body.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply theme-specific styles to body
    if (theme === 'dark') {
      body.style.background = 'linear-gradient(135deg, #020617 0%, #0f172a 100%)';
      body.style.color = '#ffffff';
      body.style.transition = 'background 0.5s ease-in-out, color 0.3s ease-in-out';
    } else {
      body.style.background = 'linear-gradient(135deg, #fefce8 0%, #fffde7 100%)';
      body.style.color = '#1e293b';
      body.style.transition = 'background 0.5s ease-in-out, color 0.3s ease-in-out';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

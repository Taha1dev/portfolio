import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize the theme state from local storage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    } else {
      return 'dark'; // Fallback in case localStorage is not available
    }
  });

  useEffect(() => {
    // Check local storage for theme preference
    if (typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', newTheme); // Save theme preference to local storage
    }

    // Update the body class based on the new theme
    if (newTheme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  };

  // Add a useEffect to update the body class on initial load
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </DarkModeContext.Provider>
  );
};

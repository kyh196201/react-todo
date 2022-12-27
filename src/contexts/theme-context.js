import { createContext, useState, useCallback, useEffect } from 'react';

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const savedTheme = window.localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  const changeTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('ui-dark');
    } else {
      document.documentElement.classList.remove('ui-dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

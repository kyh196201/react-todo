import { createContext, useState, useCallback, useEffect } from 'react';
import { setItem } from '../utils/storage';

function getInitialTheme() {
  const isDark =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  return isDark ? 'dark' : 'light';
}

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const initialTheme = getInitialTheme();
  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('ui-dark');
    } else {
      document.documentElement.classList.remove('ui-dark');
    }

    setItem('theme', theme);
  }, [theme]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

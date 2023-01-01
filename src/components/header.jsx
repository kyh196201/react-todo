import { useContext } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../contexts/theme-context';
import styles from '../styles/Header.module.css';

export default function Header({ children }) {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <button type="button" className="btn" onClick={() => changeTheme()}>
        {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>

      {children}
    </header>
  );
}

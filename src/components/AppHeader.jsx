import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from '../contexts/theme-context';
import styles from '../styles/AppHeader.module.css';

export default function AppHeader({ children }) {
  const { theme, changeTheme } = useTheme();

  return (
    <header className={styles.header}>
      <button
        type="button"
        className="btn icon-btn"
        onClick={() => changeTheme()}
      >
        {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>

      {children}
    </header>
  );
}

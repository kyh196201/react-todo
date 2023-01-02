import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from '../contexts/theme-context';
import styles from '../styles/Header.module.css';

export default function Header({ children }) {
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

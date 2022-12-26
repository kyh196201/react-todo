import { BsFillSunFill } from 'react-icons/bs';
import styles from '../styles/header.module.css';

export default function Header({ children }) {
  return (
    <header className={styles.header}>
      <button type="button" className="btn">
        <BsFillSunFill />
      </button>

      {children}
    </header>
  );
}

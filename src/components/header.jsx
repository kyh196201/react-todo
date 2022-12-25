import { BsFillSunFill } from 'react-icons/bs';
import styles from '../styles/header.module.css';
import TodoFilters from './todo-filters';

export default function Header() {
  return (
    <header className={styles.header}>
      <button type="button" className="btn">
        <BsFillSunFill />
      </button>

      <TodoFilters />
    </header>
  );
}

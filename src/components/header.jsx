import { BsFillSunFill } from 'react-icons/bs';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <button type="button" className="btn">
        <BsFillSunFill />
      </button>

      <ul className={styles['header__filter-list']}>
        <li>
          <label className={styles.header__filter}>
            <input type="radio" name="filter" />
            <span>All</span>
          </label>
        </li>
        <li>
          <label className={`${styles.header__filter}`}>
            <input type="radio" name="filter" />
            <span>Active</span>
          </label>
        </li>
        <li>
          <label className={styles.header__filter}>
            <input type="radio" name="filter" />
            <span>Completed</span>
          </label>
        </li>
      </ul>
    </header>
  );
}

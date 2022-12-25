import styles from '../styles/todo-filters.module.css';

export default function TodoFilters() {
  return (
    <ul className={styles.list}>
      <li>
        <label className={`${styles.filter}`}>
          <input type="radio" name="filter" />
          <span>All</span>
        </label>
      </li>
      <li>
        <label className={`${styles.filter}`}>
          <input type="radio" name="filter" />
          <span>Active</span>
        </label>
      </li>
      <li>
        <label className={styles.filter}>
          <input type="radio" name="filter" />
          <span>Completed</span>
        </label>
      </li>
    </ul>
  );
}

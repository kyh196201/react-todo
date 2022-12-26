import { FILTERS } from '../constants';
import styles from '../styles/todo-filters.module.css';

export default function TodoFilters({ filter, onChangeFilter }) {
  const handleChange = e => {
    const { value } = e.target;

    onChangeFilter(value);
  };

  const isChecked = value => value === filter;

  return (
    <ul className={styles.list}>
      {FILTERS.map(value => (
        <li key={value}>
          <label
            className={`
            ${styles.filter} ${isChecked(value) ? styles.active : ''}`}
          >
            <input
              type="radio"
              name="filter"
              value={value}
              checked={isChecked(value)}
              onChange={handleChange}
            />
            <span>{value}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

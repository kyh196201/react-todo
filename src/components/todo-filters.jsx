import styles from '../styles/todo-filters.module.css';

export default function TodoFilters({ filters, filter, onChangeFilter }) {
  const isChecked = value => value === filter;

  return (
    <ul className={styles.list}>
      {filters.map(value => (
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
              onChange={() => onChangeFilter(value)}
            />
            <span>{value}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

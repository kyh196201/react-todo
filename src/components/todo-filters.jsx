import { FILTERS } from '../constants';
import styles from '../styles/todo-filters.module.css';

// FIXME: filters props로 전달받기
// FIXME: handleChange e.target.value 대신 렌더링되는 곳의 value 바로 사용하기
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

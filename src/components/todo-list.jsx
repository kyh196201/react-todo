// eslint-disable-next-line no-unused-vars
import styles from '../styles/todo-list.module.css';

import TodoItem from './todo-item';

export default function TodoList() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

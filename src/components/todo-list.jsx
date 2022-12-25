// eslint-disable-next-line no-unused-vars
import styles from '../styles/todo-list.module.css';

import TodoItem from './todo-item';

export default function TodoList() {
  return (
    <ul className={styles['todo-list']}>
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

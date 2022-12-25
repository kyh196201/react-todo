// eslint-disable-next-line no-unused-vars
import styles from '../styles/todo-list.module.css';

import TodoItem from './todo-item';

export default function TodoList({ todoList = [], onDelete }) {
  const isEmpty = todoList.length === 0;

  return (
    <div className={styles.wrapper}>
      {isEmpty ? (
        <p className={styles.empty}>할 일을 추가해주세요 😃</p>
      ) : (
        <ul>
          {todoList.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}

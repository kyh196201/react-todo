import { AiFillDelete } from 'react-icons/ai';
import styles from '../styles/todo-item.module.css';

export default function TodoItem({ todo, onDelete }) {
  return (
    <li className={styles['todo-item']}>
      {/* TODO: checkbox 컴포넌트로 분리하기 */}
      <label className={styles['todo-item__checkbox']}>
        <input type="checkbox" checked={todo.completed} />
        <span>할 일 완료하기</span>
      </label>

      <p className={styles['todo-item__text']}>{todo.text}</p>

      <button
        type="button"
        className={`btn ${styles['todo-item__delete']}`}
        onClick={() => onDelete(todo.id)}
      >
        <AiFillDelete />
      </button>
    </li>
  );
}

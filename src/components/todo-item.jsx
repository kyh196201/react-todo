import { AiFillDelete } from 'react-icons/ai';
import styles from '../styles/todo-item.module.css';

export default function TodoItem({ todo, onDelete, onToggle }) {
  const handleChange = e => {
    const { target } = e;

    onToggle(todo.id, target.checked);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const { text, completed } = todo;

  return (
    <li className={styles['todo-item']}>
      {/* TODO: checkbox 컴포넌트로 분리하기 */}
      <label className={styles['todo-item__checkbox']}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
        <span>할 일 완료하기</span>
      </label>

      <p
        className={`
          ${styles['todo-item__text']} ${completed ? styles.completed : ''}
        `}
      >
        {text}
      </p>

      <button
        type="button"
        className={`btn ${styles['todo-item__delete']}`}
        onClick={handleDelete}
      >
        <AiFillDelete />
      </button>
    </li>
  );
}

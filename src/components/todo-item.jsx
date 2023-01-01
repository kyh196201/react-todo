import { AiFillDelete } from 'react-icons/ai';
import styles from '../styles/todo-item.module.css';

export default function TodoItem({ todo, onDelete, onToggle }) {
  const handleChange = e => {
    onToggle({
      ...todo,
      completed: e.target.checked,
    });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const { text, completed } = todo;

  return (
    <li className={`${styles.todo} ${completed ? styles.completed : ''}`}>
      {/* TODO: checkbox 컴포넌트로 분리하기 */}
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
        <span>할 일 완료하기</span>
      </label>

      <p
        className={`
          ${styles.text} ${completed ? styles.completed : ''}
        `}
      >
        {text}
      </p>

      <button
        type="button"
        className={`btn ${styles.delete}`}
        onClick={handleDelete}
      >
        <AiFillDelete />
      </button>
    </li>
  );
}

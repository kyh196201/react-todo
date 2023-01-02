import { AiFillDelete } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.css';
import Checkbox from './Checkbox/Checkbox';

export default function TodoItem({ todo, onDelete, onToggle }) {
  const handleChange = checked => {
    onToggle({
      ...todo,
      completed: checked,
    });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const { text, completed } = todo;

  return (
    <li className={`${styles.todo} ${completed ? styles.completed : ''}`}>
      <Checkbox checked={completed} onChange={handleChange}>
        할 일 완료하기
      </Checkbox>

      <p
        className={`
          ${styles.text} ${completed ? styles.completed : ''}
        `}
      >
        {text}
      </p>

      <button
        type="button"
        className={`btn icon-btn ${styles.delete}`}
        onClick={handleDelete}
      >
        <AiFillDelete />
      </button>
    </li>
  );
}

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
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

      <div className={styles.contents}>
        <p className={styles.text}>{text}</p>
        {/* <input type="text" className={styles.input} value={text} /> */}
      </div>

      <div className={styles.control}>
        <button type="button" className={`btn icon-btn ${styles.button}`}>
          <AiFillEdit />
        </button>

        <button
          type="button"
          className={`btn icon-btn ${styles.button}`}
          onClick={handleDelete}
        >
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
}

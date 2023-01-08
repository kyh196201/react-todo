import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import useTodoInput from '../hooks/useTodoInput';
import styles from '../styles/TodoItem.module.css';
import Checkbox from './Checkbox/Checkbox';

export default function TodoItem({
  todo,
  isEdit,
  onDelete,
  onToggle,
  onStartEdit,
  onCompleteEdit,
}) {
  const [todoInput, handleChangeTodoInput] = useTodoInput(todo);

  const handleStartEdit = () => {
    onStartEdit(todo);
  };

  const haandleCompleteEdit = () => {
    const newTodo = {
      ...todo,
      text: todoInput.trim(),
    };

    onCompleteEdit(newTodo);
  };

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
        {isEdit && (
          <input
            type="text"
            className={styles.input}
            value={todoInput}
            onChange={handleChangeTodoInput}
            onBlur={haandleCompleteEdit}
          />
        )}
        {!isEdit && <p className={styles.text}>{text}</p>}
      </div>

      <div className={styles.control}>
        {!isEdit && (
          <button
            type="button"
            className={`btn icon-btn ${styles.button}`}
            onClick={handleStartEdit}
          >
            <AiFillEdit />
          </button>
        )}

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

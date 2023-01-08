import { useRef, useEffect } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import useEditorInput from '../hooks/useEditorInput';
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
  const [editorInput, handleChangeEditorInput] = useEditorInput(todo);

  const editorRef = useRef(null);

  useEffect(() => {
    if (!isEdit) return;

    editorRef?.current?.focus();
  }, [isEdit]);

  const handleStartEdit = () => {
    onStartEdit(todo);
  };

  const handleCompleteEdit = () => {
    const newTodo = {
      ...todo,
      text: editorInput.trim(),
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
            value={editorInput}
            ref={editorRef}
            onChange={handleChangeEditorInput}
            onBlur={handleCompleteEdit}
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

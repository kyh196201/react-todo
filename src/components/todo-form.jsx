import { useState } from 'react';
import styles from '../styles/todo-form.module.css';

export default function TodoForm({ onAdd }) {
  const [todoInput, setTodoInput] = useState('');
  const handleChange = e => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const text = todoInput.trim();

    if (!text.length) return;

    onAdd(text);

    setTodoInput('');
  };

  return (
    <form className={styles['todo-form']} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={todoInput}
        onChange={handleChange}
      />

      <button className={styles.add} type="submit">
        Add
      </button>
    </form>
  );
}

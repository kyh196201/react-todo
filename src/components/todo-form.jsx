import styles from '../styles/todo-form.module.css';

export default function TodoForm() {
  return (
    <div className={styles.wrapper}>
      <form className={styles['todo-form']}>
        <input className={styles.input} type="text" placeholder="Add Todo" />
        <button className={styles.add} type="button">
          Add
        </button>
      </form>
    </div>
  );
}

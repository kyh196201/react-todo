import { AiFillDelete } from 'react-icons/ai';
import styles from '../styles/todo-item.module.css';

export default function TodoItem() {
  return (
    <li className={styles['todo-item']}>
      <label className={styles['todo-item__checkbox']}>
        <input type="checkbox" />
        <span>할 일 완료하기</span>
      </label>

      <p className={styles['todo-item__text']}>강의보기</p>

      <button type="button" className={styles['todo-item__delete']}>
        <AiFillDelete />
      </button>
    </li>
  );
}

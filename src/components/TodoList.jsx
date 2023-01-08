// eslint-disable-next-line no-unused-vars
import styles from '../styles/TodoList.module.css';

import TodoItem from './TodoItem';

export default function TodoList({
  todoList = [],
  editingTodo,
  onDelete,
  onToggle,
  onStartEdit,
  onCompleteEdit,
}) {
  if (!todoList.length) {
    return <p className={styles.empty}>할 일을 추가해주세요 😃</p>;
  }

  return (
    <ul>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEdit={editingTodo && editingTodo.id === todo.id}
          onDelete={onDelete}
          onToggle={onToggle}
          onStartEdit={onStartEdit}
          onCompleteEdit={onCompleteEdit}
        />
      ))}
    </ul>
  );
}

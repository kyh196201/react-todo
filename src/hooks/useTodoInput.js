import { useEffect, useState } from 'react';

export default function useTodoInput(todo) {
  const [todoInput, setTodoInput] = useState(todo.text);

  useEffect(() => {
    setTodoInput(todo.text);
  }, [todo]);

  const handleChangeTodoInput = e => {
    setTodoInput(e.target.value);
  };

  return [todoInput, handleChangeTodoInput];
}

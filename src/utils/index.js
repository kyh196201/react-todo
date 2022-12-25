export const createTodoId = (todoList = []) => {
  if (!todoList.length) return 1;

  const maxId = Math.max(...todoList.map(todo => todo.id));

  return maxId + 1;
};

export default {};

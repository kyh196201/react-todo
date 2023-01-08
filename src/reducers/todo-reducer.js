export const initialTodoList = [
  {
    id: 1,
    text: '드림코딩 과제 완료하기',
    completed: false,
  },
  {
    id: 2,
    text: '책 읽기',
    completed: false,
  },
];

export default function todoReducer(todoList, action) {
  const { type, payload } = action;

  // 할 일 추가
  if (type === 'add') {
    return [...todoList, payload.todo];
  }

  // 할 일 삭제
  if (type === 'delete') {
    return todoList.filter(todo => todo.id !== payload.deleted.id);
  }

  // 할 일 토글
  if (type === 'toggle') {
    const { toggled } = payload;

    return todoList.map(todo => {
      if (todo.id !== toggled.id) {
        return todo;
      }

      return toggled;
    });
  }

  // 할 일 수정
  if (type === 'edit') {
    const { edited } = payload;

    return todoList.map(todo => {
      if (todo.id !== edited.id) {
        return todo;
      }

      return edited;
    });
  }

  return todoList;
}

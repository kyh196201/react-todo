import { createTodoId } from '../utils';

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
    const newId = createTodoId(todoList);

    return [
      ...todoList,
      {
        id: newId,
        text: payload.text,
        completed: false,
      },
    ];
  }

  // 할 일 삭제
  if (type === 'delete') {
    return todoList.filter(todo => todo.id !== payload.id);
  }

  // 할 일 토글
  if (type === 'toggle') {
    const { id, checked } = payload;

    return todoList.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        completed: checked,
      };
    });
  }

  return todoList;
}

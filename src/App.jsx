import { useState } from 'react';
import './App.css';
import Header from './components/header';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import { createTodoId } from './utils';

const initialTodos = [
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

function App() {
  const [todoList, setTodoList] = useState(initialTodos);

  // 할 일 추가하기
  const handleAdd = text => {
    setTodoList(prev => {
      const id = createTodoId(prev);

      return [
        ...prev,
        {
          id,
          text,
          completed: false,
        },
      ];
    });
  };

  // 할 일 삭제하기
  const handleDelete = id => {
    setTodoList(prev => {
      return prev.filter(todo => todo.id !== id);
    });
  };

  // 할 일 토글하기
  const handleToggle = (id, checked = true) => {
    setTodoList(prev => {
      return prev.map(todo => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          completed: checked,
        };
      });
    });
  };

  return (
    <div className="app">
      <main className="container">
        <Header />

        <div className="body">
          <TodoList
            todoList={todoList}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        </div>

        <TodoForm onAdd={handleAdd} />
      </main>
    </div>
  );
}

export default App;

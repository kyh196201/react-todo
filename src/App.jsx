/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Header from './components/header';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

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

  return (
    <div className="app">
      <div className="container">
        <Header />

        <TodoList todoList={todoList} />

        <TodoForm />
      </div>
    </div>
  );
}

export default App;

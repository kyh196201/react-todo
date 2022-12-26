import { useState } from 'react';

import './App.css';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/header';
import TodoFilters from './components/todo-filters';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

import { FILTERS, FILTER_CODES } from './constants';
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

const filterFunctions = {
  [FILTER_CODES.ALL](todoList = []) {
    return todoList;
  },

  [FILTER_CODES.ACTIVE](todoList = []) {
    return todoList.filter(todo => !todo.completed);
  },

  [FILTER_CODES.COMPLETED](todoList = []) {
    return todoList.filter(todo => todo.completed);
  },
};

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [filter, setFilter] = useState(FILTERS[0]);

  const handleChangeFilter = value => {
    setFilter(value);
  };

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

  const filteredTodoList = filterFunctions[filter](todoList);

  return (
    <div className="app">
      <main className="container">
        <Header>
          <TodoFilters filter={filter} onChangeFilter={handleChangeFilter} />
        </Header>

        <Body>
          <TodoList
            todoList={filteredTodoList}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        </Body>

        <Footer>
          <TodoForm onAdd={handleAdd} />
        </Footer>
      </main>
    </div>
  );
}

export default App;

import { useState, useReducer, useEffect } from 'react';

import './App.css';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/header';
import TodoFilters from './components/todo-filters';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import ThemeProvider from './contexts/theme-context';

import { FILTERS, FILTER_CODES } from './constants';
import todoReducer, { initialTodoList } from './reducers/todo-reducer';
import { getItem, setItem } from './utils/storage';

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
  const savedTodoList = getItem('todoList');
  const [todoList, dispatch] = useReducer(
    todoReducer,
    savedTodoList ? JSON.parse(savedTodoList) : initialTodoList,
  );
  const [filter, setFilter] = useState(FILTERS[0]);

  useEffect(() => {
    setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  // 할 일 추가하기
  const handleAdd = todo => {
    dispatch({
      type: 'add',
      payload: { todo },
    });
  };

  // 할 일 삭제하기
  const handleDelete = deleted => {
    dispatch({
      type: 'delete',
      payload: { deleted },
    });
  };

  // 할 일 토글하기
  const handleToggle = toggled => {
    dispatch({
      type: 'toggle',
      payload: { toggled },
    });
  };

  const filteredTodoList = filterFunctions[filter](todoList);

  return (
    <ThemeProvider>
      <div className="app">
        <main className="container">
          <Header>
            <TodoFilters
              filters={FILTERS}
              filter={filter}
              onChangeFilter={setFilter}
            />
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
    </ThemeProvider>
  );
}

export default App;

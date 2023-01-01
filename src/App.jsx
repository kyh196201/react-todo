import { useState, useReducer, useEffect } from 'react';

import './App.css';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoFilters from './components/Filters';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
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

const readTodoListFromLocalStorage = () => {
  const todoList = getItem('todoList');

  return todoList ? JSON.parse(todoList) : initialTodoList;
};

function App() {
  const [todoList, dispatch] = useReducer(
    todoReducer,
    [],
    readTodoListFromLocalStorage,
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
      <>
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
      </>
    </ThemeProvider>
  );
}

export default App;

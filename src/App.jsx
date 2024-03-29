import { useState, useReducer, useEffect } from 'react';

import './App.css';

import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
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

const filterTodoList = (todoList, filter) => {
  return filterFunctions[filter](todoList);
};

function App() {
  const [todoList, dispatch] = useReducer(
    todoReducer,
    [],
    readTodoListFromLocalStorage,
  );
  const [filter, setFilter] = useState(FILTERS[0]);

  const [editingTodo, setEditingTodo] = useState(null);

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

  const handleStartEdit = todo => {
    setEditingTodo(todo);
  };

  const handleCompleteEdit = edited => {
    dispatch({
      type: 'edit',
      payload: { edited },
    });

    setEditingTodo(null);
  };

  const filteredTodoList = filterTodoList(todoList, filter);

  return (
    <ThemeProvider>
      <>
        <AppHeader>
          <TodoFilters
            filters={FILTERS}
            filter={filter}
            onChangeFilter={setFilter}
          />
        </AppHeader>

        <AppBody>
          <TodoList
            todoList={filteredTodoList}
            editingTodo={editingTodo}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onStartEdit={handleStartEdit}
            onCompleteEdit={handleCompleteEdit}
          />
        </AppBody>

        <AppFooter>
          <TodoForm onAdd={handleAdd} />
        </AppFooter>
      </>
    </ThemeProvider>
  );
}

export default App;

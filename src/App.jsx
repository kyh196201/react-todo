import { useState, useReducer } from 'react';

import './App.css';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/header';
import TodoFilters from './components/todo-filters';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import ThemeProvider from './contexts/theme-context';

import { FILTERS, FILTER_CODES } from './constants';
import todoReducer, { initialTodos } from './reducers/todo-reducer';

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
  const [todoList, dispatch] = useReducer(todoReducer, initialTodos);
  const [filter, setFilter] = useState(FILTERS[0]);

  const handleChangeFilter = value => {
    setFilter(value);
  };

  // 할 일 추가하기
  const handleAdd = text => {
    dispatch({
      type: 'add',
      payload: { text },
    });
  };

  // 할 일 삭제하기
  const handleDelete = id => {
    dispatch({
      type: 'delete',
      payload: { id },
    });
  };

  // 할 일 토글하기
  const handleToggle = (id, checked = true) => {
    dispatch({
      type: 'toggle',
      payload: { id, checked },
    });
  };

  const filteredTodoList = filterFunctions[filter](todoList);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;

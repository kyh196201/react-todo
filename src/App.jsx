import './App.css';
import Header from './components/header';

import TodoList from './components/todo-list';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />

        <TodoList />

        <footer className="footer">
          <form>
            <input type="text" />
            <button type="button">할 일 추가하기</button>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default App;

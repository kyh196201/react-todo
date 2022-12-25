import './App.css';

import TodoList from './components/todo-list';

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <button type="button">다크/라이트 모드</button>
          <nav className="filters">
            <ul>
              <li>all</li>
              <li>active</li>
              <li>completed</li>
            </ul>
          </nav>
        </header>

        <section className="body">
          <TodoList />
        </section>

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

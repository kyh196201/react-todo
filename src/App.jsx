import './App.css';
import Header from './components/header';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />

        <TodoList />

        <TodoForm />
      </div>
    </div>
  );
}

export default App;

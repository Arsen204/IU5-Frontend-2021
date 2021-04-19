import React from 'react';
import TodoList from './components/TodoList/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="title">My todos</p>
      <TodoList></TodoList>
    </div>
  );
}

export default App;

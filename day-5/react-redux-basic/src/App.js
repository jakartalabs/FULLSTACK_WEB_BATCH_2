import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo List Jakartalabs</h1>
      <AddTodo/>
      <TodoList />      
    </div>
  );
}

export default App;

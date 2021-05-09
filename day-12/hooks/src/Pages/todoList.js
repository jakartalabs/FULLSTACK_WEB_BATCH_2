import React, {useContext} from 'react'
import TodosContext from '../context/todos-context';
import Todo from './todo';

function TodoList() {
  const {todos}  = useContext(TodosContext);
  console.log(todos)
  return (
    <div>
      {todos.map((item, index)=>(
        <li key={item.id}>
          <Todo key={item} todo={item} />
        </li>
      ))}
    </div>
  )
}

export default TodoList

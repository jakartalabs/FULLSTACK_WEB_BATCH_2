import React, {useContext} from 'react'
import TodosContext from '../context/todos-context';

function Todo({todo}) {
  console.log(todo);
  const { todosDispatch } = useContext(TodosContext);
  return (
    <div>
      {todo.name}
      <button onClick={() => todosDispatch({ type: 'removeTodo', index:todo.id })}>X</button>
    </div>
  )
}

export default Todo

import React , {useReducer} from 'react'
import TodosContext from '../context/todos-context';
import todosReducer from '../reducers/todos';
import TodoList from './todoList';
import InputTodo from './InputTodo';

function AppReducer() {
  const [todos, todosDispatch] = useReducer(todosReducer,[])
  return (
    <div>
      <TodosContext.Provider value={{todos, todosDispatch}}>
        <InputTodo/>
        <TodoList/>
      </TodosContext.Provider>
    </div>
  )
}

export default AppReducer

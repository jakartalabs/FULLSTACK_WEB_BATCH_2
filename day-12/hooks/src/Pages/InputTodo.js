import React, { useRef, useContext} from 'react'
import TodosContext from '../context/todos-context';

function InputTodo() {
  // const [todo, setTodo] = useState('');
  const inputRef = useRef();
  const { todosDispatch } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    todosDispatch({
      type: 'addTodo',
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
    </div>
  )
}

export default InputTodo

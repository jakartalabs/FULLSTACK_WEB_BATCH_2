import React, {useRef,useReducer} from 'react'

function UseReducer() {
  const inputRef = useRef();
  const [sum, dispatch] = useReducer((state,action)=>{
    return state+action
  },0);

  const [todos, dispatch2] = useReducer((state,action)=>{
    console.log(action.type);
    switch(action.type){
      case 'addTodo':
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          }
        ];
      case 'removeTodo':
        return state.filter((_,index)=>index !==action.index);
      default:
        return state;
    }
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch2({
      type: 'addTodo',
      name: inputRef.current.value,
    });
    inputRef.current.value ="";
  }

  return (
    <div>
      {sum}
      <button onClick={() =>dispatch(1)}>ADD 1</button>   
      <br/>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef}/>
      </form>

      <ul>
        {
          todos.map((item, index)=>(
          <li key={item.id}>
            {item.name}{""}
            <button onClick={() =>dispatch2({type: 'removeTodo', index})}>X</button>
          </li>))
        }
      </ul>
    </div>
  )
}

export default UseReducer

import React from 'react'

function CustomHooks() {

  const useCount= () =>{
    const [count, setCount] =React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return [count, increment, decrement];
  }

  const [count, increment, decrement] = useCount();
  return (
    <div>
        {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default CustomHooks

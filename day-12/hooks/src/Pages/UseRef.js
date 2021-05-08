import React, {useRef, useState} from 'react'

export default function UseRef() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter);
  const nameRef = React.useRef()
  const incrementCounter = () =>{
    setCounter(counter=>counter+1);
    counterRef.current=counter;
  }
  const decrementCounter = () => {
    setCounter(counter => counter - 1);
    counterRef.current = counter;
    console.log(counterRef.current);
  }

  const handleSubmit = e => {
    e.preventDefault()

    const name = nameRef.current.value

    console.log(name)
  }
  return (
    <div>
      <h1>Counter state : {counter}</h1>
      <h1>Counter ref : {counter}</h1>
      <button onClick={() => incrementCounter()}>+</button>
      <button onClick={() => decrementCounter()}>-</button>
      <br/>
      <input
        placeholder="name"
        type="text"
        ref={nameRef}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

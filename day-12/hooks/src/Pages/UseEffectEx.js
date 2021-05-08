import React, {useState, useEffect} from 'react'

function UseEffectEx({data}) {
  const [_data, setData] = useState(null);
  console.log(data);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res =>res.json())
      .then(json => setData(json));
  }, [data])
  return (
    <div>
      UseEffectEx
      {JSON.stringify(_data)}
    </div>
  )
}

export default UseEffectEx

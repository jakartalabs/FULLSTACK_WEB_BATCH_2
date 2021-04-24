import React from 'react'
import Register from './Register';

const showRegister = () => {
  if (window.location.pathname === "/") {
    console.log('Path',window.location.pathname);
    return <Register />
  }else{
    console.log('Path', window.location.pathname);
    alert('Not Home');
  }
}


function TestRouter() {
  return (
    <div>
      <div className="ui container">{showRegister()}</div>
    </div>
  )
}

export default TestRouter;

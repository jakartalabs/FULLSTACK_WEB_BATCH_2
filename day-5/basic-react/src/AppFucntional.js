import React from 'react'
import Component1 from './Components/Component1';
import Button from './Components/Button';
import Test from './Components/test';
import Card from './Components/Card';

function AppFucntional({data}) {
  return (
    <div>
      <Component1 username={data.userName}/>
      <Button 
        disabled={false}
        text="Hallo"  
        type="primary"
        onClick={()=>alert('Hallo')}
      />
      <Test />
      <Card>
        <p>test</p>
        <button onClick={()=>alert('hai')}>Testing</button>
      </Card>
    </div>
  )
}

export default AppFucntional

import React from 'react'
import './app.css';
import { Button, Card} from './Components'

function AppStyleImplement() {
  return (
    <div>

      {/* 1. inline style in react js */}
      <div style={{border:'1px solid black', width:'100px', marginTop: '10px', height:'50px' }}>
      </div>
      {/* 2. outside component */}
      <div style={{...styles.box, ...styles.fontStyle}}>
        red
      </div>
      <Button />
      <Card />
    </div>
  )
}

const styles = {
  box: {
    width: '100px',
    height: '100px',
    marginTop: '80px',
    border: '1px solid red'
  },
  fontStyle: {
    color: 'blue',
    fontSize:'14px'
  }
}

export default AppStyleImplement

import React, { Component } from 'react'
import Button from "../components/Button"
export class Home extends Component {
  render() {
    return (
      <div className="pt-8">
        <Button 
          btnType="outline" 
          size="lg"
          onClick={()=>alert('test')}
        >
            Default
        </Button>
      </div>
    )
  }
}

export default Home

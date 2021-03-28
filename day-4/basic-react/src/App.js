import React, { Component } from 'react'
// import ilustration from './assets/img/people-Illustration-2.png'
import Page1 from './Page1'; // Component 1
import Page2 from './Page2'; // Component 1
const user ={
  name: 'joko',
  old: 21
}

const accountBank = {
  bankName: 'BNI',
  accountId: '1231313'
}

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Page1 dataUser={user} dataBankAccount={accountBank} />
        <Page2 dataUser={user} dataBankAccount={accountBank}/>
        {/* <img src={ilustration} alt=""/>
        <nav>
          <ul class="left-nav">
            <li><a href="google.com">About</a></li>
            <li><a href="google.com">Features</a></li>
            <li><a href="google.com">Pricing</a></li>
            <li><a href="google.com">Testimonial</a></li>
            <li><a href="google.com">Help</a></li>
          </ul>
          <ul class="right-nav">
            <li><a href="google.com">Sign In</a></li>
            <li><a href="google.com" class="btn btn-outline-rounded-danger">Sign Out</a></li>
          </ul>
        </nav> */}
      </div>
    )
  }
}

export default App

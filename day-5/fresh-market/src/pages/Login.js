import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="register-logo">
            Fresh Mart
          </div>
        </div>
        <div className="row login-wrap">
          <div className="login-box">
            <h1 style={{ margin: '0px' }}>Login</h1>
            <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="text" name="emailPhone" placeholder="0853" ref={this.email} />
              <input type="submit" className="btn" value="Submit" name="Login"  style={{ margin: '5px'}}/>
            </form>
            <h3>Atau Dengan</h3>
            <input type="submit" className="btn" value="Submit" name="Login" />

          </div>
        </div>
      </div>
    )
  }
}

export default Login

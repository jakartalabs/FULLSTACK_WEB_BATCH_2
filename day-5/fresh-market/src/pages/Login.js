import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className="w-full">
        <div className="flex justify-center my-8 flex-col flex-wrap items-center">
          <p>Fresh Market</p>
          <div className="box-border h-96 w-80 p-4 border-2 mt-8 shadow-sm rounded-md">
            <div className="flex flex-row justify-between mt-10 px-4">
              <h1 className="text-lg">Masuk</h1> <h1 className="text-lg">Daftar</h1>
            </div>
            <div className="flex flex-col mt-6 mx-4 ">
              <label className="text-sm">Nomor HP atau Email</label>
              <input type="text" className="w-56 h-10 border-2" value=""/>
              <input type="submit" className="w-56 mt-2" name="login"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

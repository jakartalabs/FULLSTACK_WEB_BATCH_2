import React, { Component } from 'react'
// Representasi class component basic
export class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: 'axaxa'
    }
  }

  render() {
    const { dataUser, dataBankAccount } = this.props;
    const { token } = this.state;
    return (
      <div className="navbar">
        Class component
        <br/>
        User Nama: {`${dataUser.name} Usia: ${dataUser.old}`}
        <br/>
        Bank Account: {dataBankAccount.bankName}
        <br/>
        Token {token}
      </div>
    )
  }
}

export default Page1

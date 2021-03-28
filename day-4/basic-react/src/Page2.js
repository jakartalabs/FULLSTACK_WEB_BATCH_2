import React from 'react'
// Function component basic
function Page2({dataUser, dataBankAccount}) {
  const { name, old } = dataUser;
  const { bankName, accountId } = dataBankAccount;
  return (
    <div>
      <br/>
      Functional Component
      <br/>
      User : {name} Usia: {old}
      <br/>
      Bank Account: {bankName} AccountId: {accountId}
    </div>
  )
}

export default Page2

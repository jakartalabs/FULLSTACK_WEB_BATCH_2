import React from 'react'

function Currency({children}) {
  return (
    <>
      {Number(children).toLocaleString('id', {style: 'currency', currency:'IDR'})}
    </>
  )
}

export default Currency

import React, { useState } from 'react';

function Button({children, onClick, btnType='default', size='md', arrow}) {
  let btnStyle;
  switch (btnType) {
    case 'outline': {
        if (size === 'sm') {
          btnStyle = `bg-white border-green-500 border-2`;
        }
        if(size === 'md'){
          btnStyle = `bg-white border-green-500 border-2`;
        }
        if (size === 'lg') {
          btnStyle = `bg-white border-green-500 border-2`;
        }

        if(arrow==='left'){

        }
        if(arrow==='right') {

        }
      }
      break;
    case 'primary':
      if (size === 'sm') {
        btnStyle = `bg-green-500`;
      }
      if (size === 'md') {
        btnStyle = `bg-green-500`;
      }
      if (size === 'lg') {
        btnStyle = `bg-green-500`;
      }
      if (arrow === 'left') {

      }
      if (arrow === 'right') {

      }
      break;
    default:
      if (size === 'sm') {
        btnStyle = `bg-gray-100`;
      }
      if (size === 'md') {
        btnStyle = `bg-gray-100`;
      }
      if (size === 'lg') {
        btnStyle = `bg-green-500`;
      }
      if (arrow === 'left') {

      }
      if (arrow === 'right') {

      }
      break;
  }

  return (
    <button
      onClick={onClick}
      className={btnStyle}
      type="button"
    >
      {children || 'button'} 
    </button>
  )
}

export default Button

import React, { useState } from 'react';

function Button({ children, type, onClick, btnType, size = 'md', width, arrow, disabled, className }) {
  let btnStyle;
  
  switch (btnType) {
    case 'outline': {
      if (size === 'sm') {
        btnStyle = `bg-white border-green-500 border-2`;
      }
      if (size === 'md') {
        btnStyle = `bg-white border-green-500 border-2`;
      }
      if (size === 'lg') {
        btnStyle = `bg-white border-green-500 border-2`;
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
      break;
    default:
      if (size === 'sm') {
        btnStyle = `bg-gray-100`;
      }
      if (size === 'md') {
        btnStyle = `bg-gray-100`;
      }
      if (size === 'lg') {
        btnStyle = `bg-gray-100`;
      }
      break;
  }


  btnStyle = `${btnStyle} p-2 rounded`;
  
  if(arrow){
    btnStyle += ` flex space-x-4`;
  }

  if (width){
    btnStyle += ` ${width}`;
  }
  
  if(className){
    btnStyle += ` ${className}`
  }

  return (
    <div className="relative">
      <button
        className={btnStyle}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {arrow && arrow === 'left' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 self-center flex-grow-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
        <span className="flex-grow whitespace-nowrap">{children || 'button'}</span>
        {arrow && arrow === 'right' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 self-center flex-grow-0 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default Button

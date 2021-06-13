import React from 'react';

function Input({ label, value, onClick, onChange, type, name, onBlur, placeholder="" }) {
  const inputStyle = "rounded-lg border border-gray-500 py-2 px-4 w-full";
  return (
    <div>
      {label && (
      <div className="text-sm font-semibold">{label}</div>
      )}
      <input 
        type={type}
        name={name}
        className={inputStyle} 
        value={value} 
        onChange={onChange} 
        onClick={onClick} 
        onBlur={onBlur}
        placeholder={placeholder}/>
    </div>
  ); 
}

export default Input

import React from 'react';

function Input({ label, value, onClick, onChange, placeholder="placeholder" }) {
  const inputStyle = "rounded-lg border border-gray-500 py-2 px-4";
  return (
    <div>
      {label && (
      <div className="text-sm font-semibold">{label}</div>
      )}
      <input 
        type="text" 
        className={inputStyle} 
        value={value} 
        onChange={onChange} 
        onClick={onClick} 
        placeholder={placeholder}/>
    </div>
  ); 
}

export default Input

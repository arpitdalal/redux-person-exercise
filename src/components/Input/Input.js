import React from 'react';
import './Input.css';

const Input = ({ name, onChange, placeholder, value, autoFocus }) => {
  return (
    <input
      type='text'
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
};

export default Input;

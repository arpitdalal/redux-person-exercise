import React from 'react';
import './Input.css';

const Input = ({ name, onChange, placeholder }) => {
  return <input type='text' name={name} onChange={(e) => onChange(e)} placeholder={placeholder} />;
};

export default Input;

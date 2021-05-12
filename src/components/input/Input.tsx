import React, { FC } from 'react';
import { InputProps } from 'helpers/types';

const Input:FC<InputProps> = ({
  label, type, value, onChange,
}) => (
  <div className="inputWrapper">
    { label && <p>{label}</p>}
    <input type={type} value={value} onChange={onChange} />
  </div>
);

export default Input;

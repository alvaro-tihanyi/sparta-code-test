import React, { FC } from 'react';
import { string, func } from 'prop-types';
import { InputProps } from 'helpers/types.d';

const Input:FC<InputProps> = ({
  label, type, value, onChange, placeholder,
}) => (
  <div className="inputWrapper">
    { label && <p>{label}</p>}
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  </div>
);

Input.defaultProps = {
  label: undefined,
  placeholder: '',
};

Input.propTypes = {
  label: string,
  placeholder: string,
  type: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export default Input;

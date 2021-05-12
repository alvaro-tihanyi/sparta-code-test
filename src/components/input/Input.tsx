import React, { FC } from 'react';
import { string, func } from 'prop-types';
import { InputProps } from 'helpers/types.d';

const Input:FC<InputProps> = ({
  label, type, value, onChange,
}) => (
  <div className="inputWrapper">
    { label && <p>{label}</p>}
    <input type={type} value={value} onChange={onChange} />
  </div>
);

Input.defaultProps = {
  label: undefined,
};

Input.propTypes = {
  label: string,
  type: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export default Input;

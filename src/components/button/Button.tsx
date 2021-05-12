import React, { FC } from 'react';
import { ButtonProps } from 'helpers/types';

const Button:FC<ButtonProps> = ({
  label, className, onClick, children,
}) => (
  <button className={className} type="button" onClick={onClick}>{label || children}</button>
);

export default Button;

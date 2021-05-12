import React, { FC } from 'react';
import { string, func } from 'prop-types';
import { ButtonProps } from 'helpers/types.d';

const Button:FC<ButtonProps> = ({
  label, className, onClick,
}) => (
  <button className={className} type="button" onClick={onClick}>{label}</button>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  label: string.isRequired,
  className: string,
  onClick: func.isRequired,
};

export default Button;

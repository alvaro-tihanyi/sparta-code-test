import React, { FC } from 'react';
import { string } from 'prop-types';
import { SpinnerProps } from 'helpers/types.d';

const Spinner:FC<SpinnerProps> = ({ className }) => <div className={`spinner ${className || ''}`} />;

Spinner.defaultProps = {
  className: '',
};

Spinner.propTypes = {
  className: string,
};

export default Spinner;

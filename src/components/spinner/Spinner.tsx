import { FC } from 'react';
import { SpinnerProps } from 'helpers/types';

const Spinner:FC<SpinnerProps> = ({ className }) => <div className={`spinner ${className ? className : ''}`}></div>

export default Spinner;

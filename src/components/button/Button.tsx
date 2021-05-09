import React from 'react';

import { ButtonProps } from 'helpers/types';

const Button:React.FC<ButtonProps> = ({ label, className, onClick, children }) => {
    return (
        <button className={className} type="button" onClick={onClick}>{label || children}</button>
    )
}

export default Button;

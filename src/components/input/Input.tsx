import { FC } from 'react';
import { InputProps } from 'helpers/types';

const Input:FC<InputProps> = ({ label, type, value, onChange } ) => {
    return (
        <div className="inputWrapper">
            { label && <label>{label}</label>}
            <input type={type} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;
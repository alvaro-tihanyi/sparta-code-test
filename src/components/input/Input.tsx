import React from 'react';

import { InputType } from 'helpers/types';

const Input = ({ label, type, value, onChange }: InputType ) => {
    return (
        <div className="inputWrapper">
            { label && <label>{label}</label>}
            <input type={type} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;
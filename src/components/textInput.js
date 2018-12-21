import React from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, disabled }) => {
    return ([
        <label
            key={0}
            htmlFor={name}>
            {label}
        </label>,

        <input
            key={1}
            type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value !== null ? value : ''}
            onChange={onChange}
            disabled={disabled === true ? true : false} />
    ]
    );
};

export default TextInput;

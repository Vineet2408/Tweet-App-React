import React from 'react';

import './text-area.css';

const TextAreaAutoGrow = (properties) => {

    const changeHandler = (event) => {

    }

    const { placeholder, label, name } = properties;
    return (
        <div className="col clgp-8">
            {label !== null && label !== undefined  &&<label htmlFor={name}>{label}</label> }
            <textarea onChange={changeHandler} name={name} className="text-area-auto-grow" placeholder={placeholder} />
        </div>
    )
}

export default TextAreaAutoGrow

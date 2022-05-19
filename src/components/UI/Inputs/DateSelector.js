import React from 'react';

const DateSelector = (properties) => {
    const { label, required, name} = properties;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="date" id={name} name={name}></input>
        </div>
    );
};

export default DateSelector;

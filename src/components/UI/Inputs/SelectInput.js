import React from 'react';

const SelectInput = (properties) => {
    const { label, required, name, options} = properties;
    return (
        <div>
            <label className="select-input-label" htmlFor={name}>{label}</label>
            <select className="select-input" name={name} required={required}>
                {options.map((option, index) => 
                    <option
                        key={`${index}@${option}`}
                    >
                        {option}
                    </option>)
                }
            </select>
        </div>
    );
};

export default SelectInput;

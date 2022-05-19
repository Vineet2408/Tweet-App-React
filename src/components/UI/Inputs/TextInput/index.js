import React from 'react';

import './textInput.css';

const TextInput = (properties) => {
    const { label, placeholder, required, type, name, errorMessage, regex, setter} = properties;

    const [valid, setValid] = React.useState();
    const [visited, setVisited] = React.useState(false);

    const validate = (regexp, value) => {
        if (regexp.test(value)) {
            setValid(true);
        }
        else {
            setValid(false);
        }
    }

    const blurHandler = (event) => {
        setVisited(true);
        setter(event.target.value);
        if (regex !== undefined && regex !== null) {
            validate(regex, event.target.value);
        }
    }

    const changeHandler = (event) => {
        setter(event.target.value);
        if (visited) {
            if (regex !== undefined && regex !== null) {
                validate(regex, event.target.value);
            }
        }
    }

    return (
        <div className="col clgp-8">
            {label !== null && label.trim() !== '' && 
                <label className="text-input-label" htmlFor={name}>{label}</label>
            }
            <input
                type={type}
                required={required}
                placeholder={placeholder}
                name={name}
                onBlur={blurHandler}
                onChange={changeHandler}
                className="text-input"
            />
            {visited && (!valid) && <p>{errorMessage}</p>}
        </div>
    );
};

export default TextInput;

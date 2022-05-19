import React from 'react';

import './toggleButton.css';

const ToggleButton = (properties) => {

    const [toggled, setToggled] = React.useState(false);

    const { onClick } = properties;

    const toggle = (event) => {
        setToggled(!toggle);
        onClick(event);
    }

    return (
        <div className="toggle-button-wrapper">
            <button
                type="button"
                className={'toggle-button'+ (toggled ? 'toggle-button-active' : '')}
            >
            {properties.child}
        </button>
        </div>
    );
};

export default ToggleButton;

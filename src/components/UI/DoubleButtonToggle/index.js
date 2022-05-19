import React from 'react';

import './doubleButtonToggle.css';

const DoubleButtonToggle = (properties) => {

    const { gap, toggled, setToggled, firstButtonClick, secondButtonClick} = properties;

    const wrapperStyle = {
        columnGap: gap
    };

    return (
        <div className="double-button-toggle-wrapper" style={wrapperStyle}>
            <button
                type="button"
                className={'toggle-button'+ toggled ? 'toggle-button-active' : ''}
                onClick={firstButtonClick}
            >
                {properties.firstButtonName}
            </button>
            <button
                type="button"
                className={'toggle-button'+ (!toggled ? 'toggle-button-active' : '')}
                onClick={secondButtonClick}
            >
                {properties.secondButtonName}
            </button>
        </div>
    );
};

export default DoubleButtonToggle;

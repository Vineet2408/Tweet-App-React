import React from 'react';

const ProgressBar = (properties) => {
    const [width, setWidth] = React.useState(properties.width || "0px");
    const parentBar = {
        width: "400px",
        height: "24px",
        borderRadius: "8px",
        border: "2px solid #0875e1",
        display: "flex",
        alignItems: "center",
        padding: "0px 1px 1px 1px",
    };

    const innerBar = {
        width,
        height: "24px",
        backgroundColor: "green",
        borderRadius: "8px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "500",
    }
    return (
        <div style={parentBar}>
            <div style={innerBar}>
                {width === "100%" ? "done": "uploading..."}
            </div>
        </div>
    );
};

export default ProgressBar;

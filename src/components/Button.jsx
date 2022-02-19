import React from 'react';
import btnTypes from "../constants/btnTypes";

const Button = ({children, type}) => {
    let btnStyle = "";
    switch (type) {
        case btnTypes.primary:
            btnStyle = "bg-btn-primary text-primary";
            break;
        case btnTypes.secondary:
            btnStyle = "bg-btn-secondary text-secondary";
            break;
        case btnTypes.disabled:
            btnStyle = "bg-disabled text-primary";
            break;
        default:
            btnStyle = "bg-btn-primary text-primary";
    }


    return (
        <div className={`button ${btnStyle} `}>
            {children}
        </div>
    );
};


export default Button;

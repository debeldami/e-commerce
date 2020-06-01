import React from 'react';
import './btn.style.scss';

const Btn = ({ children, isGoogle, isInverted, ...props }) => {
    return <button {...props} className={`${isInverted ? "inverted" : ""} ${isGoogle ? "google-sign-in" : ""} custom-button`}>
        {children}
    </button>
}

export default Btn;
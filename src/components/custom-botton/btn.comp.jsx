import React from 'react';
import './btn.style.scss';

const Btn = ({ children, isGoogle, ...props }) => {
    return <button {...props} className={`${isGoogle ? "google-sign-in" : ""} custom-button`}>
        {children}
    </button>
}

export default Btn;
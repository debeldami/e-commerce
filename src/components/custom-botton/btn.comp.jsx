import React from 'react';
import { CustomButtonContainer } from './btn.styles';

const Btn = ({ children, ...props }) => {
    return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
}

export default Btn;
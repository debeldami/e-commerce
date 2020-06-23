import React from "react";
import './sign-in-up.style.scss';
import SignIn from '../../components/sign-in/sign-incomp'
import SignUp from '../../components/sign-up/sign-up.comp'

const SignInOut = () => {
    return <div className="sign-in-out">
        <SignIn />
        <SignUp />
    </div>
}

export default SignInOut;
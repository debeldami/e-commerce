import React, { useState } from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.comp';
import Btn from '../custom-botton/btn.comp';
import { signUpStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';


const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (confirmPassword !== password) {
            alert("Password don't match");
            return;
        }

        await signUpStart({ displayName, email, password, confirmPassword });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return <div className="sign-up">
        <h2 className="title" >I do not have an account</h2>
        <span>sign-up with your email and password</span>
        <form onSubmit={handleSubmit} className="sign-up-form">
            <FormInput label='Display Name' type='text' handleChange={handleChange} name='displayName' value={displayName} />
            <FormInput label='email' type='email' handleChange={handleChange} name='email' value={email} />
            <FormInput label='password' type='password' handleChange={handleChange} name='password' value={password} />
            <FormInput label='password' type='password' handleChange={handleChange} name='confirmPassword' value={confirmPassword} />
            <Btn type="submit">Sign Up</Btn>
        </form>
    </div>
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (data) => dispatch(signUpStart(data))
})

export default connect(null, mapDispatchToProps)(SignUp);

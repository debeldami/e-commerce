import React, { useState } from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.comp'
import Btn from '../custom-botton/btn.comp'
// import { auth, signWithGoogle } from "../firebase/firebase.util";
import { googleSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import { emailSignInStart } from './../../redux/user/user.action';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentails, setUserCredentails] = useState({ email: '', password: '' })
    const { email, password } = userCredentails;

    const handleSubmit = async (event) => {
        event.preventDefault()
        emailSignInStart(email, password);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentails({ ...userCredentails, [name]: value })
    }

    return (<div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>sign-in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label='email' type='email' handleChange={handleChange} name='email' value={email} />
            <FormInput label='password' type='password' handleChange={handleChange} name='password' value={password} />
            <div className="buttons">
                <Btn type="submit">Sign In</Btn>
                <Btn type="button" onClick={googleSignInStart} isGoogle>Sign In with Google</Btn>
            </div>
        </form>
    </div>)

}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);

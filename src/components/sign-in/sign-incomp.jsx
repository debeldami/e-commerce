import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.comp'
import Btn from '../custom-botton/btn.comp'
import { signWithGoogle } from "../firebase/firebase.util";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return <div className="sign-in">
            <h2>I already have an account</h2>
            <span>sign-in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput label='email' type='email' handleChange={this.handleChange} name='email' value={this.state.email} />
                <FormInput label='password' type='password' handleChange={this.handleChange} name='password' value={this.state.password} />
                <div className="buttons">
                    <Btn type="submit">Sign In</Btn>
                    <Btn onClick={signWithGoogle} isGoogle>Sign In with Google</Btn>
                </div>
            </form>
        </div>
    }
}


export default SignIn;

import React from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.comp';
import Btn from '../custom-botton/btn.comp';
import { auth, createUserProfile } from "../firebase/firebase.util";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (confirmPassword !== password) {
            alert("Password don't match");
            return;
        }

        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        console.log({ displayName })

        await createUserProfile(user, { displayName });

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return <div className="sign-up">
            <h2 className="title" >I do not have an account</h2>
            <span>sign-up with your email and password</span>
            <form onSubmit={this.handleSubmit} className="sign-up-form">
                <FormInput label='Display Name' type='text' handleChange={this.handleChange} name='displayName' value={this.state.displayName} />
                <FormInput label='email' type='email' handleChange={this.handleChange} name='email' value={this.state.email} />
                <FormInput label='password' type='password' handleChange={this.handleChange} name='password' value={this.state.password} />
                <FormInput label='password' type='password' handleChange={this.handleChange} name='confirmPassword' value={this.state.confirmPassword} />
                <Btn type="submit">Sign Up</Btn>
            </form>
        </div>
    }
}


export default SignUp;

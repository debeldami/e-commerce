import React from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.comp';
import Btn from '../custom-botton/btn.comp';
import { signUpStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';


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
        const { signUpStart } = this.props;

        const { displayName, email, password, confirmPassword } = this.state;

        if (confirmPassword !== password) {
            alert("Password don't match");
            return;
        }

        await signUpStart({ displayName, email, password, confirmPassword });

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

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (data) => dispatch(signUpStart(data))
})

export default connect(null, mapDispatchToProps)(SignUp);

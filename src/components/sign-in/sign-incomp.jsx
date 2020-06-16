import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.comp'
import Btn from '../custom-botton/btn.comp'
// import { auth, signWithGoogle } from "../firebase/firebase.util";
import { googleSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import { emailSignInStart } from './../../redux/user/user.action';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { googleSignInStart } = this.props;

        return <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>sign-in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput label='email' type='email' handleChange={this.handleChange} name='email' value={this.state.email} />
                <FormInput label='password' type='password' handleChange={this.handleChange} name='password' value={this.state.password} />
                <div className="buttons">
                    <Btn type="submit">Sign In</Btn>
                    <Btn type="button" onClick={googleSignInStart} isGoogle>Sign In with Google</Btn>
                </div>
            </form>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);

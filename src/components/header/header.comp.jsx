import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.util";
import { connect } from 'react-redux';


const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    )}
            </div>
        </div>
    )
}

const mapPropsToState = state => ({
    //state = store.getState()
    currentUser: state.user.currentUser
})

export default connect(mapPropsToState)(Header);
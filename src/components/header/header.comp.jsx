import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.util";
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.comp';
import CartDropdown from '../cart-dropdown/cart-dropdown.comp';


const Header = ({ currentUser, hidden }) => {
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
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapPropsToState = ({ user: { currentUser }, cartState: { hidden } }) => ({
    //state = store.getState()
    //state was destructured
    currentUser,
    hidden
})



export default connect(mapPropsToState)(Header);
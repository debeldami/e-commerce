import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../firebase/firebase.util";
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.comp';
import CartDropdown from '../cart-dropdown/cart-dropdown.comp';
import { selectCartHidden } from "../../redux/user/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'



const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                        <OptionLink to='/signin'>
                            SIGN IN
                        </OptionLink>
                    )}
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}

const mapPropsToState = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})



export default connect(mapPropsToState)(Header);
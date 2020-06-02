import React from 'react';
import Btn from '../custom-botton/btn.comp';
import './cart-dropdown.style.scss';
import CartItem from "../cart-item/cart-item.comp";
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/user/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router-dom";
import { setCartState } from '../../redux/user/user.action';


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className='empty-message'>Your cart items are empty</span>
            }
        </div>
        <Btn onClick={() => {
            dispatch(setCartState());
            history.push('/checkout');
        }}>GO TO CHECKOUT</Btn>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));
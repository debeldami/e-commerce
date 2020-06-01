import React from 'react';
import Btn from '../custom-botton/btn.comp';
import './cart-dropdown.style.scss';
import CartItem from "../cart-item/cart-item.comp";
import { connect } from 'react-redux'

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(item => <CartItem key={item.id} item={item} />)}
        </div>
        <Btn>GO TO CHECKOUT</Btn>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: state.cartState.cartItem
})


export default connect(mapStateToProps)(CartDropdown);
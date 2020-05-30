import React from 'react';
import Btn from '../custom-botton/btn.comp';
import './cart-dropdown.style.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <Btn>GO TO CHECKOUT</Btn>
    </div>
)


export default CartDropdown;
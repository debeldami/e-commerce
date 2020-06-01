import React from 'react';
import Btn from '../custom-botton/btn.comp';
import './cart-dropdown.style.scss';
import CartItem from "../cart-item/cart-item.comp";
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/user/cart.selectors';


const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(item => <CartItem key={item.id} item={item} />)}
        </div>
        <Btn>GO TO CHECKOUT</Btn>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})


export default connect(mapStateToProps)(CartDropdown);
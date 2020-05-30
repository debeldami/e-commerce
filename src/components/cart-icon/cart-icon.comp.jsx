import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingCart.svg';
import { connect } from 'react-redux';
import { setCartState } from '../../redux/user/user.action';


const CartIcon = ({ setCartState }) => {

    return (<div className="cart-icon" onClick={() => setCartState()}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>);
}

const mapDispatchToState = (dispatch) => ({
    //dispatch === store.dispatch
    setCartState: () => dispatch(setCartState())
});

export default connect(null, mapDispatchToState)(CartIcon);




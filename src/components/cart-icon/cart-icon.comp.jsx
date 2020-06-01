import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingCart.svg';
import { connect } from 'react-redux';
import { setCartState } from '../../redux/user/user.action';


const CartIcon = ({ setCartState, items }) => {

    return (<div className="cart-icon" onClick={() => setCartState()}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{items.length}</span>
    </div>);
}

const mapDispatchToState = (dispatch) => ({
    //dispatch === store.dispatch
    setCartState: () => dispatch(setCartState())
});

const mapStateToProps = (state) => ({
    //dispatch === store.getState()
    items: state.cartState.cartItem
});

export default connect(mapStateToProps, mapDispatchToState)(CartIcon);




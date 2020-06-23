import React from 'react';
import './cart-icon.style.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingCart.svg';
import { connect } from 'react-redux';
import { setCartState } from '../../redux/user/user.action';
import { selectCartItemsCount } from '../../redux/user/cart.selectors';


const CartIcon = ({ setCartState, itemCount }) => {

    return (<div className="cart-icon" onClick={() => setCartState()}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>);

}

const mapDispatchToState = (dispatch) => ({
    //dispatch === store.dispatch
    setCartState: () => dispatch(setCartState())
});

const mapStateToProps = (state) => ({

    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToState)(CartIcon)




import actionTypes from '../action.type';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItem: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_CART_STATE:
            return {
                ...state,
                hidden: !state.hidden
            }
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
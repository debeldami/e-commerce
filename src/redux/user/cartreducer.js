import actionTypes from '../action.type';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from './cart.utils';

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
        case actionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItem: clearItemFromCart(state.cartItem, action.payload)
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItem: removeItemFromCart(state.cartItem, action.payload)
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItem: []
            }
        default:
            return state;
    }
}

export default cartReducer;
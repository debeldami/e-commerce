import actionTypes from '../action.type';
export const setCurrentUser = user => ({ type: actionTypes.SET_CURRENT_USER, payload: user });
export const setCartState = () => ({ type: actionTypes.SET_CART_STATE });
export const addItem = item => ({ type: actionTypes.ADD_ITEM, payload: item });


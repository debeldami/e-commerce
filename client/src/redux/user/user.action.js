import actionTypes from '../action.type';
export const setCartState = () => ({ type: actionTypes.SET_CART_STATE });
export const addItem = item => ({ type: actionTypes.ADD_ITEM, payload: item });
export const clearItemFromCart = item => ({ type: actionTypes.CLEAR_ITEM_FROM_CART, payload: item });
export const removeItemFromCart = item => ({ type: actionTypes.REMOVE_ITEM, payload: item });
export const googleSignInStart = () => ({ type: actionTypes.GOOGLE_SIGN_IN_START });
export const signInSuccess = (user) => ({ type: actionTypes.SIGN_IN_SUCCESS, payload: user });
export const signInFail = (error) => ({ type: actionTypes.SIGN_IN_FAIL, payload: error });
export const emailSignInStart = (emailAndPassword) => ({ type: actionTypes.EMAIL_SIGN_IN_START, payload: emailAndPassword });
export const checkUserSession = () => ({ type: actionTypes.CHECK_USER_SESSION });
export const signOutStart = () => ({ type: actionTypes.SIGN_OUT_START });
export const signOutSuccess = () => ({ type: actionTypes.SIGN_OUT_SUCCESS });
export const signOutFail = (error) => ({ type: actionTypes.SIGN_OUT_FAIL, payload: error });
export const clearCart = () => ({ type: actionTypes.CLEAR_CART });
export const signUpSuccess = ({ user, additionalData }) => ({ type: actionTypes.SIGN_UP_SUCCESS, payload: { user, additionalData } });
export const signUpFail = (error) => ({ type: actionTypes.SIGN_UP_FAIL, payload: error });
export const signUpStart = (data) => ({ type: actionTypes.SIGN_UP_START, payload: data });



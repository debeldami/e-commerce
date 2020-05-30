import actionTypes from '../action.type';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_CART_STATE:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state;
    }
}

export default cartReducer;
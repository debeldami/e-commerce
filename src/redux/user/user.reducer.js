import actionTypes from '../action.type';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case actionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case actionTypes.SIGN_IN_FAIL:
        case actionTypes.SIGN_OUT_FAIL:
        case actionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
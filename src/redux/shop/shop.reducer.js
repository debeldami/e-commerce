import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    SHOP_DATA: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.UPDATE_COLLECTION:
            return {
                ...state,
                SHOP_DATA: action.payload
            }

        default:
            return state
    }
}

export default shopReducer;
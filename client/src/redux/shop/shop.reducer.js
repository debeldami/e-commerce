import shopActionTypes from './shop.types';

const INITIAL_STATE = {
    SHOP_DATA: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case shopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }

        case shopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                SHOP_DATA: action.payload
            }
        case shopActionTypes.FETCH_COLLECTION_FAIL:
            return {
                ...state,
                isFetching: false,
                ererrorMessage: action.payload
            }

        default:
            return state
    }
}

export default shopReducer;
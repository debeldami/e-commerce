import shopActionTypes from './shop.types';

const updateCollections = collections => ({ type: shopActionTypes.UPDATE_COLLECTION, payload: collections })


export default updateCollections
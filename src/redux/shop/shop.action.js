import shopActionTypes from './shop.types';

export const fetchCollectionStart = () => ({ type: shopActionTypes.FETCH_COLLECTION_START });

export const fetchCollectionSuccess = (collectionMap) => ({ type: shopActionTypes.FETCH_COLLECTION_SUCCESS, payload: collectionMap });

export const fetchCollectionFail = (errorMessage) => ({ type: shopActionTypes.FETCH_COLLECTION_FAIL, payload: errorMessage });

// export const fetchCollectionStartAsync = () => {

//     return dispatch => {
//         const collectionRef = firestore.collection('collection');
//         dispatch(fetchCollectionStart())

//         collectionRef.get().then(
//             snapshot => {
//                 const collectionMap = conversionSelectionSnapShotToMap(snapshot);
//                 dispatch(fetchCollectionSuccess(collectionMap))
//             }
//         ).catch(error => dispatch(fetchCollectionFail(error.message)));
//     }
// }
import { takeLatest, call, put, all } from 'redux-saga/effects';
import shopActionTypes from './shop.types';
import { firestore, conversionSelectionSnapShotToMap } from './../../components/firebase/firebase.util';
import { fetchCollectionSuccess, fetchCollectionFail } from './shop.action';

export function* fetchCollectionStartAsync() {
    yield console.log('i was fired');
    try {
        const collectionRef = firestore.collection('collection');

        const snapshot = yield collectionRef.get();

        const collectionMap = yield call(conversionSelectionSnapShotToMap, snapshot);

        yield put(fetchCollectionSuccess(collectionMap))
    } catch (error) {
        yield put(fetchCollectionFail(error.message))
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTION_START, fetchCollectionStartAsync);
}


export function* shopSaga() {
    yield all([call(fetchCollectionStart)])
}
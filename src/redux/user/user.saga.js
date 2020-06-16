import { put, takeLatest, all, call } from 'redux-saga/effects';
import actionTypes from './../action.type';
import { googleProvider, auth, createUserProfile, getCurrentUser } from '../../components/firebase/firebase.util';
import { signInSuccess, signInFail, signOutSuccess, signOutFail, signUpSuccess, signUpFail } from './user.action';


function* getSnapShotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfile, userAuth, additionalData);

        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));

    } catch (error) {
        yield put(signInFail(error.message));
    }
}

function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFail(error.message));
    }
}

export function* onGoogleSignIn() {
    yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFail(error.message));
    }
}

export function* onEmailSignIn() {
    yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return
        yield getSnapShotFromUserAuth(userAuth);

    } catch (error) {
        yield put(signInFail(error.message));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(actionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutStart() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFail(error.message));
    }
}

export function* onSignOutStart() {
    yield takeLatest(actionTypes.SIGN_OUT_START, signOutStart)

}

export function* signUpWithEmailAndPassword({ payload: { displayName, email, password, confirmPassword } }) {

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }));

    } catch (error) {
        yield put(signUpFail(error.message))
    }

}

export function* onSignUpWithEmailAndPassword() {
    yield takeLatest(actionTypes.SIGN_UP_START, signUpWithEmailAndPassword)
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onSignUpSuccess() {
    yield takeLatest(actionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* usersaga() {
    yield all([call(onGoogleSignIn), call(onEmailSignIn), call(onCheckUserSession), call(onSignOutStart), call(onSignUpWithEmailAndPassword), call(onSignUpSuccess)]);
}
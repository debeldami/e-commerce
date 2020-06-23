import { all, call } from 'redux-saga/effects';
import { shopSaga } from './shop/shop.saga';
import { usersaga } from './user/user.saga'
import { cartSaga } from './user/cart.saga'

export default function* rootSaga() {
    yield all([
        call(shopSaga),
        call(usersaga),
        call(cartSaga)
    ])
}
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./user/cartreducer"
import directoryReducer from './directory/directory.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from './shop/shop.reducer'

const persistCOnfig = {
    key: 'root',
    storage,
    whitelist: ['cartState']
}

const rootReducer = combineReducers({
    user: userReducer,
    cartState: cartReducer,
    directory: directoryReducer,
    shopdata: shopReducer
})

export default persistReducer(persistCOnfig, rootReducer);
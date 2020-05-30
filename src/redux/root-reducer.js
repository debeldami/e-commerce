import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./user/cartreducer"


export default combineReducers({
    user: userReducer,
    cartState: cartReducer
})
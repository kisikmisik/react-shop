import {combineReducers, createStore} from "redux";
import itemsReducer from "./items-reducer";

let reducers = combineReducers({
    products: itemsReducer
})

let store = createStore()

export default store
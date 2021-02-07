import {applyMiddleware, combineReducers, createStore} from "redux";
import itemsReducer from "./items-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    products: itemsReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
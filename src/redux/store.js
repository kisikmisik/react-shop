import {applyMiddleware, combineReducers, createStore} from "redux";
import itemsReducer from "./items-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    products: itemsReducer,
    form: formReducer
})

const reducer = combineReducers(reducers);

let store = createStore(reducer);

export default store;
import {combineReducers, createStore} from 'redux';
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import usersReducer from "./usersReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
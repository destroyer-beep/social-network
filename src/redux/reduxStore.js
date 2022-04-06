import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import usersReducer from "./usersReduser";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
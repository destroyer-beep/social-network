import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    }
}

export const getAuthUserData = () => (dispatch) => {
    authAPI.authUser().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducer;
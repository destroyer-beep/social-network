import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return  {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializedApp = () => (dispatch) => {
    Promise.all([dispatch(getAuthUserData())]).then(()=> dispatch(initializedSuccess()))
}


export default appReducer;
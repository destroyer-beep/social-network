import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: 12},
            {id: 2, post: 'Hi 2', likesCount: 17},
        ],
        profile: null,
        status: ''
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: action.values,
                likesCount: 0
            }
            let stateCopy = {
                ...state,
                posts: [...state.posts],
                newPostText: ''
            };
            stateCopy.posts.push(newPost);
            return stateCopy;
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreater = (values) => {
    return {
        type: ADD_POST,
        values
    }
}

const setUsersProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

const setStatusProfile = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data));
    });
}

export const getStatusProfile = (status) => (dispatch) => {
    profileAPI.getStatus(status).then(response => {
        dispatch(setStatusProfile(response.data));
    });
}

export const updateStatusProfile = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatusProfile(status));
        }
    });
}

export default profileReducer;
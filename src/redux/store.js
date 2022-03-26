import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 12},
                {id: 2, post: 'Hi 2', likesCount: 17},
            ],
            newPostText: '',
        },
        messagePage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'You'},
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Sveta'},
            ],
            newMessageText: '',
        },
    },

    getState() {
        return this._state;
    },

    _callSubscriber(state) {

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);

    },
}

export default store;
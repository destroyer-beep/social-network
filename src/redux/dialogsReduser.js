const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageText: action.newMessage
            }
        }
        case SEND_MESSAGE:
            let message = {
                id: 10,
                message: state.newMessageText
            }
            let stateCopy = {
                ...state,
                newMessageText: ''
            };
            stateCopy.messages.push(message);
            return stateCopy;
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: message
    }
}

export const sendMessageCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE
    }
}
export default dialogsReducer;

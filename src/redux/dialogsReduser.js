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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 10,
                message: action.newMessageBody
            }
            let stateCopy = {
                ...state,
            };
            stateCopy.messages.push(message);
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}
export default dialogsReducer;

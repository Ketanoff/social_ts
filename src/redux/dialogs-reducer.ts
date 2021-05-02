const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type InitialDialogsStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}

let initialState: InitialDialogsStateType = {
    dialogs: [
        {id: 1, name: 'Veniamin'},
        {id: 2, name: 'Prof'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'WelDDer'},
        {id: 5, name: 'Bot_Chat'}
    ],
    
    messages      : [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'What up?'},
        {id: 4, message: 'Go l2)'},
        {id: 5, message: 'ednsjmem,m'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action: DialogsReducerActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: 6, message: body});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
};

export type DialogsReducerActionType = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const);

export default dialogsReducer;
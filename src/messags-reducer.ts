import { Action } from 'redux';
export type MessageState = string;

export interface MessageAction extends Action<'Message-Add'> {
    messagePayload: string
}
const initialState: MessageState = '';
export const messageReducder = (state: MessageState = initialState, action: MessageAction) => {

    // switch(action.type) {
    //     case 'Message-Add': {
    //         return action.messagePayload;
    //     }
    //     default: {
    //         return state;
    //     }
    // }
    if (action.type === 'Message-Add') {
        return action.messagePayload;
    }
    return state;

}
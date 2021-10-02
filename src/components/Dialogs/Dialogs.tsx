import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsContainerPropsType} from './DialogsContainer';

function Dialogs (props: DialogsContainerPropsType) {
    
    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    };
    
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);
    };
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea value={newMessageBody}
                              placeholder='Enter your message'
                              onChange={onNewMessageChange}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    );
    
}

export default Dialogs;
import {InitialDialogsStateType, sendMessageCreator, updateNewMessageBodyCreator}
    from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    dialogsPage: InitialDialogsStateType
}

let mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    };
};

type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage         : () => {
            dispatch(sendMessageCreator());
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
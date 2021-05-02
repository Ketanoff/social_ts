import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import {InitialProfileStateType} from './redux/profile-reducer';
import {InitialDialogsStateType} from './redux/dialogs-reducer';
import {InitialSideBarStateType} from './redux/sideBar-reducer';

export type StateType = {
    profilePage: InitialProfileStateType
    dialogsPage: InitialDialogsStateType
    sideBar: InitialSideBarStateType
}

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

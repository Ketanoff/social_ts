import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';
import authReducer from './auth-reducer';
import usersReducer from './usersReducer';
import thunkMiddleware from "redux-thunk"


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar    : sideBarReducer,
    auth       : authReducer,
    usersPage  : usersReducer
});

// type ReducersType = typeof rootReducer
export type StateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store

export default store;
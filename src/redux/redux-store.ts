import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sideBar-reducer';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar    : sideBarReducer
});

type ReducersType = typeof reducers
export type StateType = ReturnType<ReducersType>
export type StoreType = typeof store

let store = createStore(reducers);

export default store;
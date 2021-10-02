import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {StateType} from './redux-store';
import {UsersReducerActionType} from './usersReducer';

const SET_USERS_DATA = 'SET_USERS_DATA';

export type InitialAuthReducerStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState: InitialAuthReducerStateType = {
    id        : null,
    login     : null,
    email     : null,
    isAuth    : false
};

const authReducer = (state = initialState,
    action: AuthReducerActionType): InitialAuthReducerStateType => {
    
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

// export type AuthReducerActionType = ReturnType<typeof setAuthUsersData>
type AuthReducerActionDataType = {
    userId: string
    email: string
    login: string
}
export type AuthReducerActionType = {
    type: typeof SET_USERS_DATA
    data: AuthReducerActionDataType
}

type ThunkType = ThunkAction<void, StateType, unknown,
    AuthReducerActionType>

export const setAuthUsersData = (userId: string, email: string, login: string): AuthReducerActionType => (
    {type: SET_USERS_DATA, data: {userId, email, login}});
export const getAuthUsersData = (): ThunkType =>
    (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {userId, email, login} = response.data.data
                dispatch(setAuthUsersData(userId, email, login))
            }
        })
    }

export default authReducer;
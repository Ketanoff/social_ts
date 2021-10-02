import {ProfileType} from '../components/Profile/ProfileContainer';
import {profileAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {StateType} from './redux-store';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfileStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
    status: string
}

let initialState: InitialProfileStateType = {
    posts      : [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 1, message: 'i\'m learn react', likesCount: 111},
        {id: 1, message: 'i\'m learn GRID', likesCount: 9},
        {id: 1, message: 'i\'m learn react', likesCount: 22}
    ],
    newPostText: 'it-Venych.com',
    profile    : null,
    status: ""
};

const profileReducer = (state = initialState, action:
    ProfileReducerActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id        : 5,
                message   : state.newPostText,
                likesCount: 0
            };
            // state.posts.push(newPost);
            // state.newPostText = '';
            return {
                ...state,
                posts      : [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            // state.newPostText = action.newText;
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
};

export type ProfileReducerActionType = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const updateNewPostTextActionCreator = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text} as const);
export const setUserProfile = (profile: ProfileType) => (
    {type: SET_USER_PROFILE, profile} as const);
export const setUserStatus = (status: string) => (
    {type: SET_STATUS, status} as const);

export type ThunkType = ThunkAction<void, StateType, unknown,
    ProfileReducerActionType>
export const getUserProfile = (userId: string): ThunkType => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};
export const getUserStatus = (userId: string): ThunkType => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    });
};
export const updateUserStatus = (status: string): ThunkType => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
};

export default profileReducer;
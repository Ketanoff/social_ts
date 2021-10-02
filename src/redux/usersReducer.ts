import {Dispatch} from 'redux';
import {UserPhotoType} from '../components/Profile/ProfileContainer';
import {userAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {StateType} from './redux-store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type UsersType = {
    id: string
    name: string
    followed: boolean
    status: number
    photos: UserPhotoType
}

export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

let initialState: InitialStateType = {
    users              : [],
    pageSize           : 5,
    totalUsersCount    : 0,
    currentPage        : 1,
    isFetching         : true,
    followingInProgress: []
};

const usersReducer = (state = initialState,
    action: UsersReducerActionType) => {
    
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: action.users};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count};
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        }
        default:
            return state;
    }
};

export type UsersReducerActionType =
    ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress> | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>

export const followSuccess = (userId: string) => ({type: FOLLOW, userId} as const);
export const unfollowSuccess = (userId: string) => ({type: UNFOLLOW, userId} as const);
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users} as const);
export const setCurrentPage = (currentPage: number) => (
    {type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => (
    {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const);
export const toggleIsFetching = (isFetching: boolean) => (
    {type: TOGGLE_IS_FETCHING, isFetching} as const);
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => (
    {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const);

export type ThunkType = ThunkAction<void, StateType, unknown,
    UsersReducerActionType>

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersReducerActionType>) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        });
    };
};
export const follow = (userId: string): ThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.follow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    };
};
export const unfollow = (userId: string): ThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        userAPI.unfollow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    };
};

export default usersReducer;
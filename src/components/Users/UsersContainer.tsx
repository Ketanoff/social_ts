import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    follow, getUsers, InitialStateType, setCurrentPage, unfollow, UsersType
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import {StateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

function UsersContainer (props: PropsType) {
    
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])
    
    let onPageChanged = (pageNumber: number) => {
        props.getUsers(pageNumber, props.pageSize);
        props.setCurrentPage(pageNumber);
    };
    
    return <>
        {props.isFetching ? <Preloader/> : null}
        < Users
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            users={props.users}
            follow={props.follow}
            unFollow={props.unfollow}
            onPageChanged={onPageChanged}
            followingInProgress={props.followingInProgress}
        />;
    </>;
}

let mapStateToProps = (state: StateType): InitialStateType => {
    return {
        users          : state.usersPage.users,
        pageSize       : state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage    : state.usersPage.currentPage,
        isFetching     : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    
}

type PropsType = MapDispatchPropsType & InitialStateType

// export default withAuthRedirect(connect(mapStateToProps,
//     {follow, unfollow, setCurrentPage, getUsers
// })(UsersContainer));
export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
    withAuthRedirect)
(UsersContainer)
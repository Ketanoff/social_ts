import React, {useEffect} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router-dom'
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

export type UserPhotoType = {
    small: string
    large: string
}

export type ProfileType = {
    photos: UserPhotoType
    aboutMe: string
    fullName: string
}

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (userId: string) => void
    
}

function ProfileContainer (props: PropsType) {
    
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = '13324';
        }
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [])
    
    return <div>
        <Profile {...props} profile={props.profile} status={props.status}
                 updateUserStatus={props.updateUserStatus}/>
    </div>
}

let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status : state.profilePage.status
});

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//
// export default connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus})(WithUrlDataContainerComponent);
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
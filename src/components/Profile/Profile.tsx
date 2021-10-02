import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileType} from './ProfileContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

function Profile (props: ProfilePropsType) {
    return (
        <div className={s.img}>
            <ProfileInfo status={props.status} profile={props.profile}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
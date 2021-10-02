import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import {ProfileType} from '../ProfileContainer';
import ProfileStatus from './ProfileStatus';

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return <div>
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfoNaT5DrQdPkXE2_3W5ITt4yPACHhIGpAgg&usqp=CAU'
                alt='ff'/>
        </div>
        <div>
            <img className={s.photo} src={props.profile.photos.small} alt=''/>
            <ProfileStatus status={props.status}
                           updateUserStatus={props.updateUserStatus}/>
            <p>{props.profile.aboutMe}</p>
            <p>Name: {props.profile.fullName}</p>
        </div>
    </div>;
};

export default ProfileInfo;
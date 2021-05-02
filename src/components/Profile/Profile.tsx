import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {Dispatch} from 'redux';
import {ActionType} from '../../App';
import {InitialProfileStateType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    profilePage: InitialProfileStateType
    dispatch: Dispatch<ActionType>
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.img}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTouMvUnIuFM_s5Od7EbsnO2GhNhOSr5Ep2Lw&usqp=CAU"
                alt=""/>
            <div>ava + description</div>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
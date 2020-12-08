import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {PostType} from '../../redux/store';
import {ProfilePageType} from '../../redux/store';

type ProfilePropsType = {
    state: ProfilePageType
    // posts: Array<PostType>
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.img}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTouMvUnIuFM_s5Od7EbsnO2GhNhOSr5Ep2Lw&usqp=CAU"
                alt=""/>
            <div>ava + description</div>
            <MyPosts post={props.state.posts}/>
        </div>
    );
}

export default Profile;
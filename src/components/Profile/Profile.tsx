import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return <div className={s.img}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJgo3fNykAe3zimIzxGy53QruCL1Ihwr7frw&usqp=CAU"
            alt=""/>
        <div>ava + description</div>
        <MyPosts/>
    </div>;
}

export default Profile;
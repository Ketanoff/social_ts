import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';

export type MyPostsType = {
    message: string
    likesCount: string
}

function MyPosts() {
    return (<div>
        <div className={s.item}>MyPosts</div>
        <Posts message='Hi, how are you?' likesCount='11'/>
        <Posts message="i'm learn react" likesCount='111'/>
        <Posts message="i'm learn GRID" likesCount='0'/>
        <Posts message="i'm learn react" likesCount='22'/>
    </div>);
}

export default MyPosts;
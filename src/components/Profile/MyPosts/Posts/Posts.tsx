import React from 'react';
import s from './Posts.module.css';

type PostsPropsType ={
    message: string
    likesCount:number
    
}

function Posts(props: PostsPropsType) {
    return (
        <div className={s.item}>
            <img
                src='https://download-cs.net/steam/avatars/3425.jpg' alt='ff'/>
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>

    );
}

// function () {
//
// }
export default Posts;

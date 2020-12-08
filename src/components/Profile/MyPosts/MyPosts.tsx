import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {PostType} from '../../../redux/store';

type MyPostsPropsType = {
    post: Array<PostType>
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.post.map(p => <Posts message={p.message}
                                                   likesCount={p.likesCount}/>);

    return (<div>
        <h3 className={s.item}>MyPosts</h3>
        <div>
            <textarea>Введите сообщение</textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;
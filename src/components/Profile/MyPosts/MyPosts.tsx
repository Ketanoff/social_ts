import React, {createRef, useRef} from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {InitialProfileStateType, PostType} from '../../../redux/profile-reducer';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {Dispatch} from 'redux';
import {ActionType} from '../../../App';

type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: Dispatch<ActionType>
    newPostText: string
}

function MyPosts(props: MyPostsPropsType) {
    
    let postsElements = props.posts.map(p => <Posts
        message={p.message} likesCount={p.likesCount}/>);
    
    let newPostElement = React.useRef<HTMLTextAreaElement>(null!);
    
    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    };
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    return (<div>
        <h3 className={s.item}>MyPosts</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement}
                      value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;
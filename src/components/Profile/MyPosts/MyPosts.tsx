import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {MyPostsPropsType} from './MyPostsContainer';

function MyPosts (props: MyPostsPropsType) {
    
    let postsElements = props.posts.map(p => <Posts
        message={p.message} likesCount={p.likesCount}/>);
    
    let newPostElement = React.useRef<HTMLTextAreaElement>(null!);
    
    let onAddPost = () => {props.addPost()};
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (<div>
        <h3 className={s.item}>MyPosts</h3>
        <div>
            <textarea onChange={onPostChange} ref={newPostElement}
                      value={props.newPostText}/>
        </div>
        <div>
            <button onClick={onAddPost}>Add post</button>
        </div>
        <div>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;
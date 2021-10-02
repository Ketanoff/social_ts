import React from 'react';
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

// type MapStateToPropsType = {
//     posts: Array<PostType>
//     newPostText: string
// }
//
// type MapDispatchToPropsType = {
//     addPost: () => void
//     updateNewPostText: (text: string) => void
// }

export type MyPostsPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

let mapStateToProps = (state: StateType) => {
    return {
        posts      : state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost          : () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
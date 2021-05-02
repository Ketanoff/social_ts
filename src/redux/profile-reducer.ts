const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfileStateType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState: InitialProfileStateType = {
    posts      : [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 1, message: 'i\'m learn react', likesCount: 111},
        {id: 1, message: 'i\'m learn GRID', likesCount: 9},
        {id: 1, message: 'i\'m learn react', likesCount: 22}
    ],
    newPostText: 'it-Venych.com'
};

const profileReducer = (state = initialState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id        : 5,
                message   : state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export type ProfileReducerActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const);

export default profileReducer;
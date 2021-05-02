export type FriendsType = {
    id: number
    name: string
    avatar: string
}

export type InitialSideBarStateType = {
    friends: FriendsType[]
}

let initialState: InitialSideBarStateType = {
    friends: [
        {id: 1, name: 'WelDDer', avatar: 'https://download-cs.net/steam/avatars/3416.jpg'},
        {id: 2, name: 'Prof', avatar: 'https://download-cs.net/steam/avatars/3186.jpg'},
        {id: 3, name: 'Bot_Chat', avatar: 'https://download-cs.net/steam/avatars/3428.jpg'}
    ]
};

export type SideBarActionType = {
    type: string
}

const sideBarReducer = (state = initialState, action: SideBarActionType) => {
    
    return state;
};

export default sideBarReducer;
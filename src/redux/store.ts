export type MessageType = {
	id: number
	message: string
}
export type DialogsType = {
	id: number
	name: string
}
export type PostType = {
	id: number
	message: string
	likesCount: number
}
export type ProfilePageType = {
	posts: Array<PostType>
}
export type DialogsPageType = {
	dialogs: Array<DialogsType>
	messages: Array<MessageType>
}
export type RootStateType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
}

let store = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 11 },
			{ id: 1, message: 'i\'m learn react', likesCount: 111 },
			{ id: 1, message: 'i\'m learn GRID', likesCount: 9 },
			{ id: 1, message: 'i\'m learn react', likesCount: 22 }
		]
	},
	
	dialogsPage: {
		dialogs: [
			{ id: 1, name: 'Veniamin' },
			{ id: 2, name: 'Prof' },
			{ id: 3, name: 'Max' },
			{ id: 4, name: 'WelDDer' },
			{ id: 5, name: 'Bot_Chat' }
		],
		
		messages: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'Hello' },
			{ id: 3, message: 'What up?' },
			{ id: 4, message: 'Go l2)' },
			{ id: 5, message: 'ednsjmem,m' }
		]
	}
	
	
};

export default store;
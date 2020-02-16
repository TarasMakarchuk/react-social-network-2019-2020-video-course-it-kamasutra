import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you? I"am big panda', likeCount: 10},
                {id: 2, message: 'I"am small an hungry panda, It"s my first post', likeCount: 25},
                {id: 2, message: 'Blablabla', likeCount: -5},
                {id: 2, message: 'Hello world', likeCount: 2}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            avatars: [
                {id: 1, src: 'https://avatarko.ru/img/kartinka/1/multfilm_gomer.png'},
                {id: 2, src: 'http://miuki.info/wp-content/uploads/2010/02/bouaaaaah.png'},
                {id: 3, src: 'https://cs10.pikabu.ru/post_img/big/2018/10/12/11/1539372820179918718.png'},
                {
                    id: 4,
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauwsGf5st0iHImmYsnvQRDS844ghEGLYk_8bQ4os8ptIvvV4H&s'
                },
                {id: 5, src: 'https://static-resource.np.community.playstation.net/avatar/3RD/30004.png'},
                {id: 6, src: 'http://i.imgur.com/PmBfuXp.png'}
            ],
            newMessageBody: '',
            // newDialogText: ['it-incubator.com-------!'],
            newUserDialogs: []
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Sveta'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    addMessage() {
        let newDialogMessage = {
            id: 12,
            message: this._state.dialogsPage.newDialogText
        };

        let newUserDialogs = {
            id: 12,
            name: 'Vasya99'
        };

        let newUserAvatar = {
            src: 'http://i.imgur.com/PmBfuXp.png'
        };

        this._state.dialogsPage.messages.push(newDialogMessage);
        this._state.dialogsPage.dialogs.push(newUserDialogs);
        this._state.dialogsPage.avatars.push(newUserAvatar);
        this._state.dialogsPage.newDialogText = '';
        this._callSubscriber(this._state);
    },
    updateDialogMessage(newDialogMessage) {
        this._state.dialogsPage.newDialogText = newDialogMessage;
        this._callSubscriber(this._state);
    },
    dispatch(action) { // { type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};





export default store;

window.store = store;

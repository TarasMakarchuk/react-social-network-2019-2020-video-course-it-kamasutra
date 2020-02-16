const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
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
    // newDialogText: ['it-incubator.com-------!'],
    newUserDialogs: []
};


const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [ ...state.messages, {id: 6, message: body}]
            };
        }

        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
});


export default dialogsReducer;
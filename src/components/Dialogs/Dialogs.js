import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AvatarItems from "./AvatarItems/AvatarItems";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {AddMessageForm} from "./AddMessageForm";

const Dialogs = (props) => {

    const state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        );

    let avatarsElements = state.avatars
        .map(avatar => <AvatarItems key={avatar.id} src={avatar.src}/>);

    let messagesElements = state.messages
        .map(message => <Message key={message.id} message={message.message}
        />);

    let newMessageBody = state.newMessageBody;

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    let newRefText = React.createRef();

    const addNewMessage = values => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={classes.dialogs}>

            {/*<div className={classes.dialogsItems}>*/}

            {/*    {dialogsElements}*/}

            {/*</div>*/}

            <div className={classes.avatars}>

                {avatarsElements}

            </div>

            <div className={classes.messages}>

                <div>{messagesElements}</div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};

// const AddMessageForm = props => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field
//                     component='textarea'
//                     name='newMessageBody'
//                     placeholder='Enter your message'
//                 />
//             </div>
//             <div>
//                 <button>Send</button>
//             </div>
//         </form>
//     )
// };

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
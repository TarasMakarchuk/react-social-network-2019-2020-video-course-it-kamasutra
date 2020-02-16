import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
//import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/usersReducer";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Post message"}
                    component={Textarea}
                    name='newPostText'
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const MyPosts = React.memo(props => {
    console.log('RENDER YO MYPOSTS');

    let postElements = props.posts
        .map(element => <Post key={element.id} message={element.message} likeCount={element.likeCount}/>);

    let newPostElement = React.createRef();

    const onAddPost = values => {
        // let text = newPostElement.current.value;
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>

            <div className={classes.posts}>

                {postElements}

            </div>
            <AddNewPostForm onSubmit={onAddPost}/>
        </div>
    )
});


AddNewPostForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm);

export default MyPosts;

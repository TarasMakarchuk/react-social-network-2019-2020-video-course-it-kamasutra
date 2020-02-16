import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src='http://www.zviazda.by/sites/default/files/field/image/pnd.jpg'/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>

    )

};

export default Post;
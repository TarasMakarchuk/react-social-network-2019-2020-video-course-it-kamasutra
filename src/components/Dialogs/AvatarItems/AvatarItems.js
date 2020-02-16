import React from 'react';

const AvatarItems = (props) => {
    console.log('AvatarItems', props);
    return (
        <img src={props.src}/>
    )
};

export default AvatarItems;
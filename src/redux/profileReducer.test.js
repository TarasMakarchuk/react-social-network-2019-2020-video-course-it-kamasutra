import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDOM from "react-dom";
import App from "../App";

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you? I"am big panda', likeCount: 10},
        {id: 2, message: 'I"am small an hungry panda, It"s my first post', likeCount: 25},
        {id: 3, message: 'Blablabla', likeCount: -5},
        {id: 4, message: 'Hello world', likeCount: 2}
    ]
};

it('length of posts should be incremented', () => {

    //1. start data
    let action = addPostActionCreator('it-kamasutra-test');

//2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {

    //1. start data
    let action = addPostActionCreator('it-kamasutra-test');

//2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts[4].message).toBe('it-kamasutra-test');
});

it('after deleting length of message should be decrement', () => {

    //1. start data
    let action = deletePost(1);

//2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {

    //1. start data
    let action = deletePost(1000);

//2. action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(4);
});



import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElement = props.posts.map(el => <Post key={el.id} message={el.post}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

        return <div>
            My posts
            <div>
                New posts
            </div>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            {postsElement}
        </div>
    }


const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newPostText' placeholder='Enter your post'/>
            <div><button>Send</button></div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({
    form: 'postAddMessageForm'
})(AddPostForm);

export default MyPosts;
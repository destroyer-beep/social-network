import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(el => <Post key={el.id} message={el.post}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div>
            My posts
                <div>
                    New posts
                </div>
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
        </div>
        <div>
            <button onClick={onAddPost}>Click</button>
        </div>
        {postsElement}
    </div>
}

export default MyPosts;
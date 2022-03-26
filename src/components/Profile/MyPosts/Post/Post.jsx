import style from "./Post.module.css";
import React from 'react';

const Post = (props) => {
    return <div>
        <div className={style.item}>
            {props.message}
        </div>
    </div>
}

export default Post;
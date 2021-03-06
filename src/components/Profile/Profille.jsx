import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return <div className={style.content}>
        <ProfileInfo profile={props.profile} id={props.id} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
</div>
}

export default Profile;
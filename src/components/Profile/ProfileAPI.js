import React from 'react';
import ProfileContainer from "./ProfileContainer";
import {useParams} from 'react-router-dom';

let ProfileAPI = () => {
    let {id} = useParams();
    return <ProfileContainer id={id}/>
}

export default ProfileAPI;
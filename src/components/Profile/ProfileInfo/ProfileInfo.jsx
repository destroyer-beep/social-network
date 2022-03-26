import React from 'react';
import bcg from '../../../assets/images/content-background.jpg'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return  <div>
        <div>
            <img src={bcg} alt="Content"/>
        </div>
        <img src={props.profile.photos.large}/>
        <div>ava + description</div>
        </div>
}

export default ProfileInfo;
import React from 'react';
import bcg from '../../../assets/images/content-background.jpg'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return  <div>
        <div>
            <img src={bcg} alt="Content"/>
        </div>
        {props.id ? <div>{props.profile ? <img src={props.profile.photos.large}/> : <Preloader/>}</div> : null}
        <div><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></div>
        </div>
}

export default ProfileInfo;
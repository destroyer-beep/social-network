import React from 'react';
import style from './Profile.module.css';
import Profile from "./Profille";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from '../../redux/profileReduser';

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUsersProfile(response.data);
        });
    }

    render() {
        return <div className={style.content}>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return  {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps,{setUsersProfile})(ProfileContainer);
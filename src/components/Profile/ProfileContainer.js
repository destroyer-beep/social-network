import React from 'react';
import style from './Profile.module.css';
import Profile from "./Profille";
import {connect} from "react-redux";
import {getStatusProfile, getUserProfile, updateStatusProfile} from '../../redux/profileReduser';
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        if (this.props.id) {
            this.props.getUserProfile(this.props.id);
        }
        this.props.getStatusProfile(this.props.id);
    }

    render() {
        return <div className={style.content}>
            <Profile profile={this.props.profile} id={this.props.id} status={this.props.status} updateStatus={this.props.updateStatusProfile}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return  {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}



export default compose(
    connect(mapStateToProps,{getUserProfile, getStatusProfile, updateStatusProfile}),
    withAuthRedirect
)(
    ProfileContainer
)
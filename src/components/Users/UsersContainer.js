import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    follow,
    unFollow
} from "../../redux/usersReduser";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   followingIsProgress={this.props.followingInProgress}
            />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default  compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        getUsers
    }),

)(UsersContainer)
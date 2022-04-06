import Dialogs from "./Dialogs";
import {sendMessageCreator} from "../../redux/dialogsReduser";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
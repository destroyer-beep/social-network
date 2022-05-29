import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/vakidators/validators";

let maxLength20 = maxLengthCreator(20)

const Dialogs = (props) => {

    let state = props.messagePage;
    let dialogsElement = state.dialogs.map(el => <DialogItem name={el.name} key={el.id} id={el.id} />)
    let messagesElement = state.messages.map(el => <Message key={el.id} message={el.message}/>)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) {
        return  <Navigate replace to="/login" />
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>

            <div className={style.messages}>
                <div>{messagesElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[requiredField, maxLength20]} name='newMessageBody' placeholder='Enter your message'/>
            <div><button>Send</button></div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
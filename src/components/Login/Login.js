import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/vakidators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import style from './../common/FormControls/FormControls.module.css';

let maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Email'} validate={[requiredField, maxLength30]} name={'email'} component={Input}/></div>
            <div><Field placeholder={'Password'} validate={[requiredField, maxLength30]} type={'password'} name={'password'} component={Input}/></div>
            <div><Field type={"checkbox"} name={'rememberMe'} component={'input'}/>Remember me</div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div><button>Submit</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate replace to="/profile"/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
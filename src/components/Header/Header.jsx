import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={style.header}>
        <img src={logo} alt="Logo"/>
        <div className={style.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.loginOut}>Log out</button></div>
             : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;
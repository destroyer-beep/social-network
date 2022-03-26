import React from 'react';
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <NavLink to='/profile' className={(data) => data.isActive ? style.active : ''}>Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/dialogs' className={(data) => data.isActive ? style.active : ''}>Messages</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/users' className={(data) => data.isActive ? style.active : ''}>Users</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/news' className={(data) => data.isActive ? style.active : ''}>News</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/music' className={(data) => data.isActive ? style.active : ''}>Music</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/settings' className={(data) => data.isActive ? style.active : ''}>Settings</NavLink>
        </div>
    </nav>
}

export default Nav;
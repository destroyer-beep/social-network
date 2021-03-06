import React from "react";
import style from "./users.module.css";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <=pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={() => props.onPageChanged(p)}
                             className={props.currentPage === p ? style.selectedPage : ''}> {p} ,</span>
            })}
        </div>
        <button>Получить пользователей</button>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt='' src={u.photos.small != null ? u.photos.small : 'https://www.astromeridian.ru/assets/images/imya/dmitrii.jpg'}/>
                        </NavLink>
                        </div>
                    <div>
                        <div>
                            {u.followed ? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                props.unFollow(u.id);
                            }}>UnFollow</button> : <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>}
                        </div>
                    </div>
                </span>
            <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {"u.location.country"}
                        </div>
                        <div>
                            {"u.location.city"}
                        </div>
                    </span>
                </span>
        </div>)}
    </div>
}

export default Users;
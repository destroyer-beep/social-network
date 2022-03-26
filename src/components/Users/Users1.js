import React from 'react';
import axios from "axios";

let Users1 = (props) => {
    let getUsers = () => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
    }
    }

    return (
        <div>
            <button onClick={getUsers}>Получить пользователей</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img alt='' src={u.photos.small != null ? u.photos.small : 'https://www.astromeridian.ru/assets/images/imya/dmitrii.jpg'}/>
                    </div>
                    <div>
                        <button>
                            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </button>
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
    )
}

export default Users1;
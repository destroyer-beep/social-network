import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileAPI from "./components/Profile/ProfileAPI";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile'
                           element={<ProfileContainer/>}
                    />
                    <Route path='/profile/:id'
                           element={<ProfileAPI/>}
                    />
                    <Route path='/dialogs/*'
                           element={<DialogsContainer/>}
                    />
                    <Route path='/users/*'
                           element={<UsersContainer/>}
                    />
                    <Route path='/login/*'
                           element={<Login/>}
                    />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;

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
import {connect} from "react-redux";
import {initializedApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }

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
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializedApp})(App);

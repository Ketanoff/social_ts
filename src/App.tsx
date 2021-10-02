import React from 'react';
import s from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';
import HeaderContainer from './components/Haeder/HeaderContainer';

function App () {
    
    // let stateDialogs = store.dialogsPage;
    // let stateProfile = store.profilePage;
    
    return (
        <div className={s.app_Wrapper}>
            < HeaderContainer/>
            < Navbar/>
            <div className={s.app_Wrapper_Content}>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() =>
                    <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/login'
                       render={() => <LoginPage/>}/>
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}
            
            </div>
        </div>
    );
}

export default App;

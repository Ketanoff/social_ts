import React from 'react';
import s from './App.module.css';
import Header from './components/Haeder/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {RootStateType} from "./redux/store";

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {

    // let stateDialogs = store.dialogsPage;
    // let stateProfile = store.profilePage;

    return (
        <div className={s.app_Wrapper}>
            < Header/>
            < Navbar/>
            <div className={s.app_Wrapper_Content}>
                <Route path='/dialogs' render={() => <Dialogs
                    state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile
                    state={props.state.profilePage}/>}/>
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}

            </div>
        </div>
    );
}

export default App;

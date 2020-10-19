import React from 'react';
import c from './App.module.css';
import Header from './components/Haeder/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
    return (<div className={c.app}>
            <div className={c.appWrapper}>
                < Header/>
                < Navbar/>
                <div className={c.appWrapperContent}>

                    < Dialogs/>
                    < Profile/>
                </div>
            </div>
        </div>
    );
}

export default App;

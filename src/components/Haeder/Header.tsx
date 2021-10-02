import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

function Header (props: HeaderPropsType) {
    return (<header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFoAzDD1dr5dr6t13ZoI3Hgt9DXkE7Jytykg&usqp=CAU'
                alt=''/>
        </header>
    );
}

export default Header;
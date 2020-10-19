import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (<header className={classes.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFoAzDD1dr5dr6t13ZoI3Hgt9DXkE7Jytykg&usqp=CAU"
                alt=""/>
        </header>
    );
}

export default Header;
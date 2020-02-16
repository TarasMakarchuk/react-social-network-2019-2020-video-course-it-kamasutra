import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = props => {
    return (
        <header className={classes.header}>
            <img
                src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/65161479/original/947fbb65743c4722d85d48d1a0d5e92df5eef93a/design-premium-logo-for-you.jpg'/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;
import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

console.log(classes);

const Navbar = () => {
    return (
        <div>
            <nav className={classes.nav}>
                <h4>ID: 5524</h4>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.activeLink}> Profile</NavLink>
                </div>
                <div className={`${classes.item} ${classes.activeLink}`}>
                    <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/Instruments' activeClassName={classes.activeLink}>Instruments</NavLink>
                </div>



                {/*<Friends />*/}

            </nav>
        </div>
    )
};

export default Navbar;
import React from 'react'
import { Outlet } from 'react-router';
import indexLogo from './static/images/weather-wizard-logo.png';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="header-logo-div">
                    <Link to={"/"}><img src={indexLogo} alt="Logo" /></Link>
                </div>
                <div className="header-btns-div">
                    <Link to={"/documentation"}><button className="header-btn"> Documentation</button></Link>
                    <Link to={"/about"}><button className="header-btn"> About Me</button></Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

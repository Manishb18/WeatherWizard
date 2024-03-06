import React from 'react';
import "./Aboutpage.css";
import {Helmet} from "react-helmet";

export const Aboutpage = () => {
    return (
        <>
            <div className="about-con">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Weather Wiz | About</title>
            </Helmet>
                <div className='about-div'>
                    <p>Website under construction!</p>
                </div>
            </div>
        </>
    )
}

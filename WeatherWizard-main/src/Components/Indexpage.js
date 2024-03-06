import React, {useEffect} from 'react';
import './Indexpage.css'; 
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import {Helmet} from "react-helmet";

export const Indexpage = () => {
    var startCanvas = () => {
        var c = document.getElementById('canv');
        var $ = c.getContext("2d");
        var col = function (x, y, r, g, b) {
            $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            $.fillRect(x, y, 1, 1);
        }
        var R = function (x, y, t) {
            return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t)));
        }
        var G = function (x, y, t) {
            return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)));
        }
        var B = function (x, y, t) {
            return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
        }
        var t = 0;
        var x, y;
        var run = function () {
            for (x = 0; x <= 35; x++) {
                for (y = 0; y <= 35; y++) {
                    col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
                }
            }
            t = t + 0.02;
            window.requestAnimationFrame(run);
        }
        run();
    }
    useEffect(() => {
        startCanvas()
    }, [])
    
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Weather Wiz | Home</title>
            </Helmet>
            <div className="hero">
                <div className="container">
                    <canvas id="canv" width="32" height="32"></canvas>
                </div>
                <p className="main-text" id="main-text-1">WEATHER <br/> WIZARD</p>
                <p className="main-text" id="main-text-2">WEATHER <br/> WIZARD</p>
                <div className="go-div">
                    <Link to="/main" className='go'>{<BsArrowRightCircle />}</Link>
                </div>
            </div>
        </>
    )
}

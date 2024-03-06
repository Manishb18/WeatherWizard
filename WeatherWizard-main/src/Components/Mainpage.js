import React, { useState, useEffect} from "react";
import './Mainpage.css';
import logoImg from './static/images/weather-wizard-logo.png';
import warangalIcon from './static/images/warangal_icon.png';
import dallasIcon from './static/images/dallas_icon.png';
import cherrapunjiIcon from './static/images/cherrapunji_icon.png';
import svalbardIcon from './static/images/svalbard_icon.png';
import blizzard from './static/weather-effects/BlizzardWeather.mp4';
import coolCloudy from './static/weather-effects/CoolCloudyWeather.mp4';
import pleasant from './static/weather-effects/PleasantWeather.mp4';
import sunny from './static/weather-effects/SunnyWeather.mp4';
import rainy from './static/weather-effects/RainyWeather.mp4';
import storm from './static/weather-effects/StormWeather.mp4';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

export const Mainpage = () => {
    const [place, setPlace] = useState([]);
    const [inputPlace, setInputPlace] = useState("Hyderabad");
    const [weatherEffect, setWeatherEffect] = useState(pleasant);
    // var input_place = "";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b0cac6cd4cmsh2910615d30481a4p180b05jsnf4b1afbefd9c',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    
    function getData(place){
        fetch('https://yahoo-weather5.p.rapidapi.com/weather?location='+ place +'&format=json&u=c', options)
            .then(response => response.json())
            .then((data) => {
                // place = [city, region, country, speed, humidity, visibility, sunrise, sunset, tempreature, text]
                setPlace([
                    data.location.city,
                    data.location.region,
                    data.location.country,
                    data.current_observation.wind.speed,
                    data.current_observation.atmosphere.humidity,
                    data.current_observation.atmosphere.visibility,
                    data.current_observation.astronomy.sunrise,
                    data.current_observation.astronomy.sunset,
                    data.current_observation.condition.temperature,
                    data.current_observation.condition.text
                ])
            })
            .catch(err => console.error(err));
    }

    document.body.style.overflow = "hidden";

    const clickSubmit = (e) => {
        e.preventDefault();
        getData(document.forms['myform']['ipbox'].value);
    }

    function clickBtn(popularPlace){
        getData(popularPlace);
    }


    useEffect(() => {
        getData("Hyderabad");
        setWeatherEffect();
    }, []);

    useEffect(() => {
        setWeatherEffect(()=>{
            if (place[8]){
                if (place[9] && place[3]){
                    if (place[9] === 'Showers' && place[3] >= 10)
                        return storm;
                    if (place[9] === 'Showers' && place[3] < 10)
                        return rainy;
                }
                if (place[8] < 0)
                    return blizzard;
                if(place[8] > 0 && place[8] <= 15)
                    return coolCloudy;
                if(place[8] > 15 && place[8] <= 30)
                    return pleasant;
                if(place[8] > 30)
                    return sunny;
            }
        })
    }, [place])

    function loadCheck(value){
        if (value)
            return value;
        else
            return "Loading..."
    }


    return (
        <>
            <div className="header-con">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Weather Wiz | Main</title>
            </Helmet>
                <div className="header-logo-div">
                    <Link to={"/"}><img src={logoImg} alt="Logo" /></Link>
                </div>
                <div className="header-popular-places-div">
                    Different Places :
                    <button className="popular-place-btn" onClick={()=> clickBtn("warangal")}><img className="popular-place-icon" src={warangalIcon} alt="Logo" /> Warangal</button>
                    <button className="popular-place-btn" onClick={()=> clickBtn("dallas")}><img className="popular-place-icon" src={dallasIcon} alt="Logo" /> Dallas</button>
                    <button className="popular-place-btn" onClick={()=> clickBtn("cherrapunji")}><img className="popular-place-icon" src={cherrapunjiIcon} alt="Logo" /> Cherrapunji</button>
                    <button className="popular-place-btn" onClick={()=> clickBtn("svalbard")}><img className="popular-place-icon" src={svalbardIcon} alt="Logo" /> Longyearbyen</button>
                </div>
                <div className="header-search-div">
                    <form name="myform" onSubmit={clickSubmit}>
                        <input id="ip" type="text" spellCheck="false" value={inputPlace} onChange={(e) => setInputPlace(e.target.value)} name="ipbox"/>
                        <input id="submit-btn" type="submit" value="Search"/>
                    </form>
                </div>
            </div>
            <div className="components-hero">
                <div className="weather-video-div">
                    <video className="weather-video" src={weatherEffect} loop autoPlay/>
                </div>
                <div className="place-info-div">
                    {/* <div className="place-info-card-heading-div">
                        <h3 className="card-heading">Location Data</h3>
                    </div> */}
                    <div className="place-info-card-data-div">
                        <div className="place-info-card-data-city">
                            <br /><span className="dataSpan">{loadCheck(place[0])}</span>
                        </div>
                        <div className="place-info-card-data-region">
                            <br /><span className="dataSpan">{loadCheck(place[1]) + ", " + loadCheck(place[2])}</span>
                        </div>
                    </div>
                </div>
                <div className="place-weather-div">
                    {/* <div className="place-weather-card-heading-div">
                        <h3 className="card-heading">Weather Data</h3>
                    </div> */}
                    <div className="place-weather-card-data-div">
                        <div className="temperature-data-card">
                            <div className="temperature-data-card-heading-div">
                                <h3 className="inner-card-heading">Temperature Data</h3>
                            </div> 
                            <span className="dataSpan final-data">{"Temperature -> " + loadCheck(place[8])} <sup>o</sup>C</span>
                            <span className="dataSpan final-data">{"Sunrise -> " + loadCheck(place[6])}</span>
                            <span className="dataSpan final-data">{"Sunset -> " + loadCheck(place[7])}</span>
                        </div>
                        <div className="atmosphere-data-card">
                            <div className="atmosphere-data-card-heading-div">
                                <h3 className="inner-card-heading">Atmosphere Data</h3>
                            </div>
                            <span className="dataSpan final-data">{"Humidity -> " + loadCheck(place[4])}</span>
                            <span className="dataSpan final-data">{"Wind speed -> " + loadCheck(place[3]) + " Kmph"}</span>
                            <span className="dataSpan final-data">{"Visibility -> " + loadCheck(place[5])}</span>
                        </div>
                    </div>
                    <div className="weather-text-div">
                        <br /><span className="dataSpan">{"Sky -> " + loadCheck(place[9])}</span>
                    </div>
                </div>
            </div>
        </>
    );

};

import React from 'react'
import "./Documentationpage.css";
import aboutClick from "./static/images/doc-about-click.png";
import goClick from "./static/images/doc-go-click.png";
import searchClick from "./static/images/doc-search-click.png";
import placesClick from "./static/images/doc-places-button-click.png";
import { Helmet } from "react-helmet";

export const Documentationpage = () => {
    function redirectFun1() {
        window.open("https://developer.mozilla.org/en-US/docs/Glossary/SPA", "_blank");
    }
    function redirectFun2() {
        window.open("https://reactjs.org/docs/create-a-new-react-app.html", "_blank");
    }
    function redirectFun3() {
        window.open("https://rapidapi.com/apishub/api/yahoo-weather5/", "_blank");
    }
    function redirectFun4() {
        window.open("https://rapidapi.com/hub", "_blank");
    }
    document.body.style.overflow = "visible";


    return (
        <>
            <div className='doc-con'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Weather Wiz | Docs</title>
                </Helmet>
                <div className="doc-heading-div">
                    <p className='doc-heading'>Documentation of Weather Wizard</p>
                </div>
                <div className="doc-data-div">
                    <div className="doc-data-section">
                        <div className="doc-txt-div">
                            <p className="doc-txt doc-welcome">
                                Welcome to Weather Wizard.
                                Find the weather of any location around the world within seconds.
                            </p>
                            <h3 className='doc-txt-headings' id="preface-heading">Preface</h3>
                            <p className="doc-txt">
                                A weather app is a useful tool for anyone who wants to stay informed about the current and forecasted weather conditions. With a weather app, we can easily check the temperature, humidity, and other important weather data for our current location or any other location around the world. We can also set up alerts for severe weather conditions, such as thunderstorms or hurricanes, so we can stay safe and prepared. This is a great resource for anyone who wants to stay up-to-date on the weather and be prepared for any weather-related events. Whether a person casual is a weather enthusiast or someone who needs to stay informed for work or travel, this is an essential tool for staying safe and informed.
                            </p>
                            <h3 className="doc-txt-headings" id="development-heading">Development</h3>
                            <p className="development-data">
                                Weather Wizard is a component based Single page <sup onClick={() => redirectFun1()} className='doc-links'>[1]</sup> front-end web application which is built using React framework <sup onClick={() => redirectFun2()} className='doc-links'>[2]</sup>. The data is served by a weather API, called 'Yahoo Weeather' <sup onClick={() => redirectFun3()} className='doc-links'>[3]</sup> which is available on Rapid API <sup onClick={() => redirectFun4()} className='doc-links'>[4]</sup> platfrom. It basically fetches the data of the requested location and displays in the Graphical User Interface. The tools which are used to develop this applicaion are HTML, CSS, JavaScript, ReactJS, RapidAPI, a Hosting platform etc.
                            </p>
                            <h3 className='doc-txt-headings' id="functionality-heading">Functionality</h3>
                            <div className="functionality-section">
                                <div className="functionality-card-row">
                                    <div className="functionality-card">
                                        <div className="functionality-card-head">
                                            <p className="functionality-steps">1. Visit the HomePage </p>
                                        </div>
                                        <div className="functionality-card-data">
                                            <img src={aboutClick} alt="Loading..." className="functionality-image" />
                                            <p className="functionality-sub-steps">
                                                Here, we can find some tabs like 'Documentation' and 'About'. To find more about the developer, click on About tab.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="functionality-card">
                                        <div className="functionality-card-head">
                                            <p className="functionality-steps">2. Navigate to the next page</p>
                                        </div>
                                        <div className="functionality-card-data">
                                            <img src={goClick} alt="Loading..." className="functionality-image" />
                                            <p className="functionality-sub-steps">
                                                To use the main application, click on the "Go" arrow which is present below the Title.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="functionality-card-row">
                                    <div className="functionality-card">
                                        <div className="functionality-card-head">
                                            <p className="functionality-steps">3. Using the search function</p>
                                        </div>
                                        <div className="functionality-card-data">
                                            <img src={searchClick} alt="Loading..." className="functionality-image" />
                                            <p className="functionality-sub-steps">
                                                To find the weather insights of any desired location. Provide the name of the "City" in the given search box on the top-right-corner of the page.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="functionality-card">
                                        <div className="functionality-card-head">
                                            <p className="functionality-steps">4. Using quick actions (Recommended)</p>
                                        </div>
                                        <div className="functionality-card-data">
                                            <img src={placesClick} alt="Loading..." className="functionality-image" />
                                            <p className="functionality-sub-steps">
                                                To get the weather insights of locations with totally different climatic conditions, use the quick links present on the top of the page.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

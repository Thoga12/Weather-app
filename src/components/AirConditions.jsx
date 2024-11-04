// eslint-disable-next-line no-unused-vars
import React from "react";


const AirConditions = () => {
    return(
        <div className="card-weather">
            <div className="header-air-conditions">
                <h5>Air Confitions</h5>
                <a href="">See More</a>
            </div>
            <div className="content-air-conditions">
                <div className="container-conditions">
                    <i className="bi bi-thermometer-half"></i>
                    <div className="content-conditions">
                        <p>Real Feel</p>
                        <h3>30°</h3>
                    </div>
                </div>
                <div className="container-conditions">
                    <i className="bi bi-wind"></i>
                    <div className="content-conditions">
                        <p>Wind</p>
                        <h3>0.2 km/h</h3>
                    </div>
                </div>
                <div className="container-conditions">
                    <i className="bi bi-droplet-fill"></i>
                    <div className="content-conditions">
                        <p>Chance Of Rain</p>
                        <h3>0%</h3>
                    </div>
                </div>
                <div className="container-conditions">
                    <i className="bi bi-brightness-high-fill"></i>
                    <div className="content-conditions">
                        <p>UV Index</p>
                        <h3>3</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AirConditions;
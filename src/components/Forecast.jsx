// eslint-disable-next-line no-unused-vars
import React from "react";
import Sun from '../assets/images/sun.png'


const Forecast = () => {
    return(
        <div className="card-weather">
            <h5>Todays Forecast</h5>
            <div className="content-forecast">
                <div className="forecast-weather">
                    <p>6:00 AM</p>
                    <img src={Sun} alt="Sun" />
                    <p className="tem">25°</p>
                </div>
                <div className="forecast-weather">
                    <p>6:00 AM</p>
                    <img src={Sun} alt="Sun" />
                    <p className="tem">25°</p>
                </div>
                <div className="forecast-weather">
                    <p>6:00 AM</p>
                    <img src={Sun} alt="Sun" />
                    <p className="tem">25°</p>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
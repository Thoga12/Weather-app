// eslint-disable-next-line no-unused-vars
import React from "react";
import Sun from '../assets/images/sun.png'


const ForecastWeekly = () => {
    return(
        <div className="card-weather">
            <h5>Weekly Forecast</h5>
            <div className="container-weekly-forecast">
                <div className="card-weekly-forecast">
                    <p>Tue</p>
                    <div className="weather">
                        <img src={Sun} alt="Weather" />
                        <p>Sunny</p>
                    </div>
                    <p>36/22</p>
                </div>
                <div className="card-weekly-forecast">
                    <p>Tue</p>
                    <div className="weather">
                        <img src={Sun} alt="Weather" />
                        <p>Sunny</p>
                    </div>
                    <p>36/22</p>
                </div>
            </div>
        </div>
    );
};


export default ForecastWeekly;
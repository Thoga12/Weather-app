// eslint-disable-next-line no-unused-vars
import React from "react";
import DisplayWeather from './DisplayWeather';
import Forecast from './Forecast';
import AirConditions from './AirConditions';

const Search = () => {
    return(
        <div className="contents">
            <div className="search">
                <input type="text" className="inputSearch" placeholder="Search For Cities"/>
            </div>
            <DisplayWeather />
            <Forecast />
            <AirConditions />
        </div>
       
    );
};

export default Search;
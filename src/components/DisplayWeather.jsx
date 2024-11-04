// eslint-disable-next-line no-unused-vars
// import React from "react";
import Sun from '../assets/images/sun.png'
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const DisplayWeather = () => {

//   const [weatherData, setWeatherData] = useState(null);
//   const [city, setCity] = useState("Barcelona");
//   const API_KEY = 'fe926bb105df46fabee03359685e4d79'; // Ganti dengan API Key dari OpenWeatherMap

//   useEffect(() => {
//     // Fungsi untuk mengambil data cuaca
//     const fetchWeatherData = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//         );
//         setWeatherData(response.data);
//       } catch (error) {
//         console.error("Error fetching the weather data", error);
//       }
//     };

//     fetchWeatherData();
//   }, [city]);
  
    return (
        <div className="displayWeather">
            <div className="infoWeather">
                <h3>Barcelona</h3>
                {/* {weatherData ? (
                    <div>
                        <p>Chance Of Rain: {weatherData.main.humidity}%</p>
                        <h1>{weatherData.main.temp}°</h1>
                        <p>Temperature: {weatherData.main.temp}°C</p>
                        <p>Feels Like: {weatherData.main.feels_like}°C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                        <p>Weather: {weatherData.weather[0].description}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )} */}
                <p>Chance Of Rain: 0%</p>
                <h1>31°</h1>
                
            </div>

            <div className="imgWeather">
                <img src={Sun} alt="Sun" />
            </div>
        </div>
    );
};

export default DisplayWeather;
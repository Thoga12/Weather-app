// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from '../components/sidebar';
import Search from '../components/Search';
import ForecastWeekly from '../components/ForecastWeekly';
// import DisplayWeather from '../components/DisplayWeather';



const Home = () => {
    return (
        <section className='home'>
            <Sidebar />
            <Search />
            <ForecastWeekly />
        </section>
    );
};
export default Home;

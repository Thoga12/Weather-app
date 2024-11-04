// eslint-disable-next-line no-unused-vars
import React from 'react';
// import './index.css'; // Import file CSS
import logo from '../assets/images/logo.png'
import '../assets/react.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="header">
            <div className="icon-container">
                <img src={logo} alt="Logo" />
            </div>
            {/* <h2 className="title">Menu</h2> */}
        </div>
        <nav className="nav">
            <ul className="menu-items">
            <li className="menu-item">
                <a href="#" className="menu-link">
                    <i className="bi bi-cloud-sun"></i>
                    <span className="label">Weather</span>
                </a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-link">
                    <i className="bi bi-list-ul"></i>
                    <span className="label">Cities</span>
                </a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-link">
                    <i className="bi bi-map"></i>
                    <span className="label">Map</span>
                </a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-link">
                    <i className="bi bi-sliders2"></i>
                    <span className="label">Settings</span>
                </a>
            </li>
            </ul>
        </nav>
    </div>
    
  );
};

export default Sidebar;

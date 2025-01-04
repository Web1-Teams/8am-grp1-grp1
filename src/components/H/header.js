import React from "react";
import "./header.css";


const Header = () => {
    return (
        <header className="header">
            <video autoPlay muted loop id="background-video">
                <source src="/videos/WhatsApp Video 2024-12-17 at 18.37.21_dfd9eaa8.mp4" type="video/mp4"/>
            </video>
            <div className="overlay">
                <h1>Welcome to the World of Programmers</h1>
                <p>Where Your Dreams Come True</p>
            </div>
        </header>


    );
};

export default Header;
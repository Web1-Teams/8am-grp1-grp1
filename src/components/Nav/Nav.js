import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img
                        src="/photo/WhatsApp Image 2024-12-17 at 18.38.42_87ba1eb2.jpg"
                        alt="Logo"
                        className="logo-img"
                        style={{ borderRadius: "50px" }}
                    />
                </Link>
            </div>
            <ul className="nav-items">
                <li>
                    <Link to="/about" className="about-link">
                        <i className="fas fa-info-circle"></i>   About
                    </Link>
                </li>
                <li>
                    <Link to="/signup" className="sign-up">
                        <i className="fas fa-user-plus"></i> Sign Up
                    </Link>
                </li>
                <li>
                    <Link to="/login" className="sign-in">
                        <i className="fas fa-sign-in-alt"></i> Sign In
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

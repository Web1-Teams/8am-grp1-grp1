import React from "react";
import "./script";
import "./F.css";

const F = () => {
    return (
        <footer aria-label="Website Footer">
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href="https://facebook.com" aria-label="Facebook">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" aria-label="Twitter">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://plus.google.com" aria-label="Google Plus">
                        <i className="fa-brands fa-google-plus"></i>
                    </a>
                    <a href="https://youtube.com" aria-label="YouTube">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
                <div className="footerNav">
                    <ul>
                        <li><a href="/" aria-label="Home">Home</a></li>
                        <li><a href="/news" aria-label="News">News</a></li>
                        <li><a href="/about" aria-label="About Us">About</a></li>
                        <li><a href="/contact" aria-label="Contact Us">Contact Us</a></li>
                        <li><a href="/team" aria-label="Our Team">Our Team</a></li>
                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <p>
                    Copyright &copy; 2023; Designed by{" "}
                    <span className="designer">Najih</span>
                </p>
            </div>
        </footer>
    );
};

export default F;

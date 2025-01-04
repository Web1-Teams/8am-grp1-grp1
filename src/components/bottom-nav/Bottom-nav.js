import React from "react";
import './Bottom-nav.css'
import { Link } from "react-router-dom";
const Bottomnav = () => {
  return (
      <div className="bottom-nav">
          <Link to="/Hoom"><i className="fa-solid fa-house"></i></Link>
          <Link to="/Profile"><i className="fa-solid fa-user"></i></Link>
          <Link to="/Scholarship"><i className="fa-solid fa-graduation-cap"></i></Link>
          <Link to="/Jop"><i className="fa-solid fa-briefcase"></i></Link>
          <Link to="/Courses"><i className="fa-solid fa-book"></i></Link>
      </div>
  )
};

export default Bottomnav ;
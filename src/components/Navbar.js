import React, { Children } from "react";
import { useState } from 'react';
import './Navbar.css'; 
import LeftSide from './Left-side';
import QuestionButtons from './Question-buttons';

const Navbar = () => {

    const [isSidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = (event) => {
        event.preventDefault();  
        setSidebarActive(!isSidebarActive);  // تغيير حالة الشريط الجانبي
    };

    const getSidebarClass = () => {
        return isSidebarActive ? 'left-side active' : 'left-side';
    };

  return(
      <nav>
          <div className="nav-left">
              <div className="toggle-sidebar" onClick={toggleSidebar}>
                  <i className="fa-solid fa-bars"></i>
                  <div className={getSidebarClass()}>
                 <LeftSide/>
                  </div>
              </div>
              <img src="/assert/WhatsApp%20Image%202024-11-29%20at%206.25.59%20PM.jpeg" alt="logo" className="logo" title="ITC"/>
          </div>

          <div className="nav-right">
              <div className="nav-icons">
                  <i className="fa-regular fa-bell" title="Notices"></i>
                  <i className="fa-regular fa-envelope" title="Messages"></i>
                  <a href=""><i className="fa-solid fa-right-to-bracket"></i></a>
              </div>
              <div className="search-box">
                  <input type="text" placeholder="search..." title="search"/>
                  <i className="fa-solid fa-microphone-lines" title="Voice search"></i>
                  <i className="fa-solid fa-camera-retro" title="Search by image"></i>
              </div>
              <div className="user-img online">
                  <img src="/assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp" width="35" height="35"/>
              </div>
              <div className="status"></div>
          </div>

      </nav>)


};

export default Navbar;
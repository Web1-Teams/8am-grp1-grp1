import React from "react";
import myImage from "../ignore.jpeg";
import "./User-Info.css";

const UserInfo = () => {
  return (
    <div className="new-Post-round2">
      <img
       src ={myImage} 
        alt="User Avatar"
      />
      <div>
        <p>user name</p>
      </div>
    </div>
  );
};

export default UserInfo;
import React from "react";
import "./Button-Publish.css";

const ButtonPublish = ({onClick}) => {
    return (
      
        <button className="post-button" type="button" onClick={onClick}  >
          Publish
        </button>
    );
  };
  
  export default ButtonPublish;
  
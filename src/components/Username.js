import React from "react";
import './Username.css'
const Username = (props) => {
    const imgu = (props.img) ? props.img : "assert/vector-flat-illustration-grayscale-avatar-600nw-2281862025.webp"

    return(

    <div className="yoser-profil">
      <img src={imgu} height="70" width="70"/>
        <p className="name">{props.name}</p>
    </div>
    )

};

  export default Username ;
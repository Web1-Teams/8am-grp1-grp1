import React from "react";
import './Page-buttons.css'
import Icon from "../icon/Icon";
import { Link } from "react-router-dom";
const PageButtons= (props) =>{
    return(
             <button className="rounded-button">
                <Link to={props.link} className="link-inside-button"><h1>{props.title}</h1></Link>
                    
                    <Icon con={props.icon}/>
            </button>
    )
};

export default PageButtons;

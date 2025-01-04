import react from "react";
import './Page-buttons.css'
import Icon from "../icon/Icon";
const PageButtons= (Props) =>{
    return(
<button className="rounded-button">
                    <h1>{Props.title}</h1>
                    <Icon con={Props.icon}/>
            </button>
    )
};

export default PageButtons;

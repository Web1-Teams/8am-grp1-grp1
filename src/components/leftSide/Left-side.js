import React from "react";
import './Left-side.css';
import QuestionButtons from "../questionButtons/Question-buttons";
const LeftSide = (props) => {
    return (
        <aside className="left-side">
            <nav className="questions-container" style={{backgroundColor: "white"}}>
                <h2>Questions</h2>
                <ul className="questions-list">
                    {props.children}
                </ul>
            </nav>
        </aside>
    )

};

export default LeftSide;
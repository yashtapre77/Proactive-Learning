import React from "react";
import "../styles/StudentCard.css"

function StudentCard(props) {
    return (
        <div className="cbody">

            <div className="name">
            <img src="#" alt="Student" className="student-img" />
                <p>{props.fname} {props.lname}</p>
            </div>

            <div className="btns">
                <button className="utilbtns">Edit</button>
                <button className="utilbtns">Performance</button>
            </div>
        </div>
    );
}

export default StudentCard;

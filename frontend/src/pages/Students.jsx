import React from "react";
import './../styles/students.css'
import StudentCard from "../components/StudentCard";
function Students(){
    return(
        <>
        <div className="top">
            <h2>Students</h2>
        </div>
        <div className="mid">
            <StudentCard fname="John" lname=" Smith"/>
            <StudentCard fname="John" lname=" Smith"/>
            <StudentCard fname="John" lname=" Smith"/>
            <StudentCard fname="John" lname=" Smith"/>
            <StudentCard fname="John" lname=" Smith"/>
            <StudentCard fname="John" lname=" Smith"/>
        </div>
        <div className="bottom">
            <button>Add New Student</button>
        </div>
        </>
    )
}
export default Students
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentDataContext } from "../contexts/context";


function StudentCard(props) {

    const con = useContext(StudentDataContext);

    const onDashboard = () => {
        con.setStudData(props.dataObj)
    }

    // console.log(1,props.dataObj)
    // console.log(1,Object.keys(props.dataObj).length)
    // console.log(2,con.studData)
    // console.log(2,Object.keys(con.studData).length)

    return (
        <div className="flex w-[50vw] border-2 justify-between m-4 p-3 rounded-2xl shadow-custom">
            <div className="text-xl ml-3">
                {props.name}
            </div>

            <div className="mr-3 text-l">
                {/* <button className="border-2 rounded-xl mx-3 hover:bg-white">Edit</button> */}
                <Link to="/student-dashboard"><button className="mx-3 hover:bg-white border-2 " onClick={onDashboard}>Performance</button></Link>
            </div>
        </div>
    );
}

export default StudentCard;

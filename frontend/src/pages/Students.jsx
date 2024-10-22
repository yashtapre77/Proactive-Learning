import React, { useEffect, useState } from "react";
import '../styles/students.css'
import StudentCard from "../components/StudentCard";
import { Link } from "react-router-dom";
import AxiosInstance from "../axios/axios";

function Students() {

    const [fetchedData, setFetchedData] = useState(null);
    
    const getData = () => {
        AxiosInstance.get(`students/`).then((res)=>{
            setFetchedData(res.data)
        })
        .catch((error) => {
            console.error("Error fetching data:", error); // Handle errors
        });
    }
    
    useEffect(() => {
        getData();
    },[])
    
    return (
        <div>

            <div className="font-bold text-4xl mt-5">
                <center><h2>Students</h2></center>
            </div>

            <Link to="/AddStudent">
                <div className=" ml-[60vw]">
                    <a className="  mr-4 p-2 bg-[#FFA500] text-white flex items-center rounded-3xl w-[13vw] sticky right-20 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                        <span className="font-bold">Add New Student</span>
                    </a>
                </div>
            </Link>

            <div className="flex flex-col justify-center items-center">


                <div className="">
                    {
                        fetchedData && fetchedData.map((val) =>(
                            <StudentCard key ={val.name} name={val.name} dataObj = {val}/>
                        ))
                    }

                </div>
                <div className="">
                </div>
            </div>

        </div>
    )
}
export default Students
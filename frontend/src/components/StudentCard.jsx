import React from "react";


function StudentCard(props) {
    return (
        <div className="flex w-[50vw] border-2 justify-between m-4 p-3 rounded-2xl shadow-custom">
            <div className="text-xl ml-3">
                {props.name}
            </div>

            <div className="mr-3 text-l">
                <button className="border-2 rounded-xl mx-3 hover:bg-white">Edit</button>
                <button className="mx-3 hover:bg-white border-2">Performance</button>
            </div>
        </div>
    );
}

export default StudentCard;

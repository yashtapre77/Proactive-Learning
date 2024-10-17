import React from "react";
import StudentForm from "../components/StudentForm";
import "./../styles/addstudent.css";


function AddStudent() {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center">
      <header className="text-3xl font-semibold mt-4">
        <h1>Add new Student</h1>
      </header>

      <div>
        <StudentForm />
      </div>
    </div>
  );
}

export default AddStudent;
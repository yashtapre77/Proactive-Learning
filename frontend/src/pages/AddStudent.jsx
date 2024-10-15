import React from "react";
import StudentForm from "../components/StudentForm";
import "./../styles/addstudent.css";

// Example student data from the CSV file (replace with actual CSV data after parsing)
const studentData = {
  name: "Awez Sheikh",
  age: 19,
  sex: "M",
  address: "Urban",
  famsize: "GT3",
  Pstatus: "T",
  Medu: 3,
  Fedu: 2,
  Mjob: "Teacher",
  Fjob: "Other",
  Grade_8_Marks: 80,
  Grade_9_Marks: 78,
  Grade_10_Marks: 85,
  Grade_11_Marks: 82,
  Grade_12_Marks: 90,
  course: "Engineering",
  semester: "6",
};

function AddStudent() {
  return (
    <div className="AddStu">
      <header className="Add-header">
        <h1>Student Dashboard</h1>
      </header>
      <StudentForm student={studentData} />
    </div>
  );
}

export default AddStudent;
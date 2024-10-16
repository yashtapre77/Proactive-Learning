import React, { useState, useContext } from "react";

import InpComponent from "./InpComponent";
import SelectComponent from "./SelectComponent";
import { StudentDataContext } from "../contexts/context";


const StudentForm = ({ student }) => {


  const context = useContext(StudentDataContext)
  console.log(1, context.studData)

  return (

    <div className="w-[95vw]  rounded-xl flex flex-col items-center justify-center m-4 p-3 bg-gray-100">

      <div className="w-[96%]  flex flex-wrap justify-between ">
        <InpComponent itype="" iplaceholder="Enter Name" />
        <SelectComponent ilabel="Select Gender" options={{ 1: "Yes", 0: "No" }} />
        <InpComponent itype="number" iplaceholder="Enter Age" />

        <InpComponent itype="number" iplaceholder="Enter Semester" />
        <SelectComponent ilabel="Select Course" options={{ 1: "Yes", 0: "No" }} />

        <SelectComponent ilabel="Select a dwelling area" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Select Family Size" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Select Parents Status" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Select Mother Education" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Select Father Enducatio" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Select Father Job" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Select Mother Job" options={{ 1: "Yes", 0: "No" }} />

        <SelectComponent ilabel="Reason for Opting this school" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Select your Guardian" options={{ 1: "Yes", 0: "No" }} />
        <InpComponent itype="number" iplaceholder="Enter College Travel Time" />
        <InpComponent itype="number" iplaceholder="Enter Daily Study Hours" />
        <InpComponent itype="number" iplaceholder="Number of Failures" />

        <SelectComponent ilabel="Extra School Support" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Family Educational Support" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Extra Paid Classes" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Extra Curricual Activities" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Attended Nursery School" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Want to Take Higher Education" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Internet Access" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="In a Relationship" options={{ 1: "Yes", 0: "No" }} />

        <SelectComponent ilabel="Rate Quality of Family Relationships" options={{ 1: "Yes", 0: "No" }} />
        <InpComponent itype="number" iplaceholder="Freetime after College" />
        <SelectComponent ilabel="Go out with Friends" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Workday Alcohol Consumption" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Weakend Alcohol Consumption" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent ilabel="Rate Current Health Status" options={{ 1: "Yes", 0: "No" }} />
        <InpComponent itype="number" iplaceholder="Total Absentes" />

        <InpComponent itype="number" iplaceholder="First Semester Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Second Semester Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Third Semester Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Fourth Semester Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Fifth Semester Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Sixth Semester Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Seventh Semester Marks (Outof 100)" />

        <InpComponent itype="number" iplaceholder="Eighth Grade Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Nineth Grade Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Tenth Grade Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Eleventh Grade Marks (Outof 100)" />
        <InpComponent itype="number" iplaceholder="Twelfth Grade Marks (Outof 100)" />

      </div>

      <div>
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#FFA500] text-white hover:bg-[rgb(255,129,84)] focus:outline-none  disabled:opacity-50 disabled:pointer-events-none mb-4 mt-6 " >
          Add Student Data
        </button>
      </div>
    </div>
  );
};

export default StudentForm;

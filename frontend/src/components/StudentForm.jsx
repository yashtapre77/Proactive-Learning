import React, { useState, useContext } from "react";

import InpComponent from "./InpComponent";
import SelectComponent from "./SelectComponent";
import { StudentDataContext } from "../contexts/context";
import AxiosInstance from "../axios/axios";
import studentData from "../contexts/context";


const StudentForm = () => {


  const context = useContext(StudentDataContext)
  const finalData = context.studData

  const handleAddData = (e) => {
    alert("Data Sucssessfully added ")
    context.setStudData(studentData)
    console.log(finalData)
    AxiosInstance.post(`students/`, {
      name: finalData.name,
      age: finalData.age,
      sex: finalData.sex,
      address: finalData.address,
      famsize: finalData.famsize,
      Pstatus: finalData.Pstatus,
      Medu: finalData.Medu,
      Fedu: finalData.Fedu,
      Mjob: finalData.Mjob,
      Fjob: finalData.Fjob,
      reason: finalData.reason,
      guardian: finalData.guardian,
      traveltime: finalData.traveltime,
      studytime: finalData.studytime,
      failures: finalData.failures,
      schoolsup: finalData.schoolsup,
      famsup: finalData.famsup,
      paid: finalData.paid,
      activities: finalData.activities,
      nursery: finalData.nursery,
      higher: finalData.higher,
      internet: finalData.internet,
      romantic: finalData.romantic,
      famrel: finalData.famrel,
      freetime: finalData.freetime,
      goout: finalData.goout,
      Dalc: finalData.Dalc,
      Walc: finalData.Walc,
      health: finalData.health,
      absences: finalData.absences,
      G1: finalData.G1,
      G2: finalData.G2,
      G3: finalData.G3,
      G4: finalData.G4,
      G5: finalData.G5,
      G6: finalData.G6,
      G7: finalData.G7,
      Grade_8_Marks: finalData.Grade_8_Marks,
      Grade_9_Marks: finalData.Grade_9_Marks,
      Grade_10_Marks: finalData.Grade_10_Marks,
      Grade_11_Marks: finalData.Grade_11_Marks,
      Grade_12_Marks: finalData.Grade_12_Marks,
      course: finalData.course,
      semester: finalData.semester,
      student_categories: "below average",
      cluster_group: 0
    }).then(response => {
      console.log(response.data);
    })
      .catch(error => {
        console.error("There was an error!", error);
      });
    window.location.reload()
    window.history.back()
  }

  return (

    <div className="w-[95vw]  rounded-xl flex flex-col items-center justify-center m-4 p-3 bg-gray-100">

      <div className="w-[96%]  flex flex-wrap justify-between ">
        <InpComponent identifier="name" itype="" iplaceholder="Enter Name" />
        <SelectComponent identifier="sex" ilabel="Select Gender" options={{ 0: "Female", 1: "Male" }} />
        <InpComponent identifier="age" itype="number" iplaceholder="Enter Age" />

        <InpComponent identifier="semester" itype="number" iplaceholder="Enter Semester" />
        <SelectComponent identifier="course" ilabel="Select Course" options={{ 0: "Computer Science and Engineering", 1: "Data Science", 2: "Airtificial Inteligence and Machine Learning", 3: "Cyber Security" }} />

        <SelectComponent identifier="address" ilabel="Select a dwelling area" options={{ 0: "Rular", 1: "Urban" }} />
        <SelectComponent identifier="famsize" ilabel="Select Family Size" options={{ 0: "Less Than 3", 1: "Greater Than 3" }} />
        <SelectComponent identifier="Pstatus" ilabel="Select Parents Status" options={{ 0: "Divorced", 1: "Together" }} />
        <SelectComponent identifier="Medu" ilabel="Select Mother Education" options={{ 0: "None", 1: "Primary Education (4th grade)", 2: "Education till 8th grade", 3: "Secondary Education (12th grade)", 4: "Higher Education" }} />
        <SelectComponent identifier="Fedu" ilabel="Select Father Enducation" options={{ 0: "None", 1: "Primary Education (4th grade)", 2: "Education till 8th grade", 3: "Secondary Education (12th grade)", 4: "Higher Education" }} />
        <SelectComponent identifier="Fjob" ilabel="Select Father Job" options={{ 0: "Other", 1: "Services", 2: "House Wife", 3: "Teacher", 4: "Health" }} />
        <SelectComponent identifier="Mjob" ilabel="Select Mother Job" options={{ 0: "Other", 1: "Services", 2: "House Wife", 3: "Teacher", 4: "Health" }} />

        <SelectComponent identifier="reason" ilabel="Reason for Opting this school" options={{ 0: "Prefered Course", 1: "College Reputation", 2: "Close to Home", 3: "Other" }} />
        <SelectComponent identifier="guardian" ilabel="Select your Guardian" options={{ 0: "Other", 1: "Father", 2: "Mother" }} />
        <InpComponent identifier="traveltime" itype="number" iplaceholder="Enter College Travel Time" />
        <InpComponent identifier="studytime" itype="number" iplaceholder="Enter Daily Study Hours" />
        <InpComponent identifier="failures" itype="number" iplaceholder="Number of Failures" />

        <SelectComponent identifier="schoolsup" ilabel="Extra School Support" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent identifier="famsup" ilabel="Family Educational Support" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent identifier="paid" ilabel="Extra Paid Classes" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent identifier="activities" ilabel="Extra Curricual Activities" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent identifier="nursery" ilabel="Attended Nursery School" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent identifier="higher" ilabel="Want to Take Higher Education" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent identifier="internet" ilabel="Internet Access" options={{ 1: "Yes", 0: "No" }} />
        <SelectComponent identifier="romantic" ilabel="In a Relationship" options={{ 1: "Yes", 0: "No" }} />

        <SelectComponent identifier="famrel" ilabel="Rate Quality of Family Relationships" options={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }} />
        <InpComponent identifier="freetime" itype="number" iplaceholder="Freetime after College" />
        <SelectComponent identifier="goout" ilabel="Go out with Friends" options={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }} />
        <SelectComponent identifier="Dalc" ilabel="Workday Alcohol Consumption" options={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }} />
        <SelectComponent identifier="Walc" ilabel="Weakend Alcohol Consumption" options={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }} />
        <SelectComponent identifier="health" ilabel="Rate Current Health Status" options={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }} />
        <InpComponent identifier="absences" itype="number" iplaceholder="Total Absentes" />

        <InpComponent identifier="G1" itype="number" iplaceholder="First Semester Marks (Outof 100)" />
        <InpComponent identifier="G2" itype="number" iplaceholder="Second Semester Marks (Outof 100)" />
        <InpComponent identifier="G3" itype="number" iplaceholder="Third Semester Marks (Outof 100)" />
        <InpComponent identifier="G4" itype="number" iplaceholder="Fourth Semester Marks (Outof 100)" />
        <InpComponent identifier="G5" itype="number" iplaceholder="Fifth Semester Marks (Outof 100)" />
        <InpComponent identifier="G6" itype="number" iplaceholder="Sixth Semester Marks (Outof 100)" />
        <InpComponent identifier="G7" itype="number" iplaceholder="Seventh Semester Marks (Outof 100)" />

        <InpComponent identifier="Grade_8_Marks" itype="number" iplaceholder="Eighth Grade Marks (Outof 100)" />
        <InpComponent identifier="Grade_9_Marks" itype="number" iplaceholder="Nineth Grade Marks (Outof 100)" />
        <InpComponent identifier="Grade_10_Marks" itype="number" iplaceholder="Tenth Grade Marks (Outof 100)" />
        <InpComponent identifier="Grade_11_Marks" itype="number" iplaceholder="Eleventh Grade Marks (Outof 100)" />
        <InpComponent identifier="Grade_12_Marks" itype="number" iplaceholder="Twelfth Grade Marks (Outof 100)" />

      </div>

      <div>
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#FFA500] text-white hover:bg-[rgb(255,129,84)] focus:outline-none  disabled:opacity-50 disabled:pointer-events-none mb-4 mt-6 " onClick={handleAddData} >
          Add Student Data
        </button>
      </div>
    </div>
  );
};

export default StudentForm;

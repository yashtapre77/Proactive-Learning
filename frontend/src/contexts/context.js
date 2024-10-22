import { createContext } from "react";

const studentData = {
    name: "",
    age: 19,
    sex: 0,
    address: 0,
    famsize: 0,
    Pstatus: 0,
    Medu: 0,
    Fedu: 0,
    Mjob: 0,
    Fjob: 0,
    reason: 0,
    guardian: 0,
    traveltime: 0,
    studytime: 0,
    failures: 0,
    schoolsup: 0,
    famsup: 0,
    paid: 0,
    activities: 0,
    nursery: 0,
    higher: 0,
    internet: 0,
    romantic: 0,
    famrel: 1,
    freetime: 0,
    goout: 1,
    Dalc: 1,
    Walc: 1,
    health: 1,
    absences: 0,
    G1: 0,
    G2: 0,
    G3: 0,
    G4: 0,
    G5: 0,
    G6: 0,
    G7: 0,
    Grade_8_Marks: 0,
    Grade_9_Marks: 0,
    Grade_10_Marks: 0,
    Grade_11_Marks: 0,
    Grade_12_Marks: 0,
    course: 0,
    semester: 1,
    student_categories:"below average" ,
    cluster_group:0,
  };



  export const StudentDataContext = createContext();
  export default studentData;



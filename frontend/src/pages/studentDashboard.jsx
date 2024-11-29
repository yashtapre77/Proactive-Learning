import React, { useContext, useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { StudentDataContext } from '../contexts/context';
import SelectOptions from '../contexts/SelectOptions';


const COLORS = ['#0088FE', '#FF8042'];




const StudentDashboard = (props) => {

  const con = useContext(StudentDataContext)
  let selectOpts = SelectOptions


  const studentDetails = {
    name: con.studData.name,
    branch: selectOpts["course"][con.studData.course],
    semester: con.studData.semester,
    category: selectOpts["cluster_group"][con.studData.cluster_group],
  };


  const dataSets = {
    Overall: {
      semesterData: [
        { name: 'Sem 1', barValue: con.studData.G1, lineValue: 22000 },
        { name: 'Sem 2', barValue: con.studData.G2, lineValue: 26000 },
        { name: 'Sem 3', barValue: con.studData.G3, lineValue: 29000 },
        { name: 'Sem 4', barValue: con.studData.G4, lineValue: 34000 },
        { name: 'Sem 5', barValue: con.studData.G5, lineValue: 37000 },
        { name: 'Sem 6', barValue: con.studData.G6, lineValue: 37000 },
        { name: 'Sem 7', barValue: con.studData.G7, lineValue: 37000 },
      ],
      schoolData: [
        { name: '8th', barValue: con.studData.Grade_8_Marks, lineValue: 18000 },
        { name: '9th', barValue: con.studData.Grade_9_Marks, lineValue: 20000 },
        { name: '10th', barValue: con.studData.Grade_10_Marks, lineValue: 22000 },
        { name: '11th', barValue: con.studData.Grade_11_Marks, lineValue: 23000 },
        { name: '12th', barValue: con.studData.Grade_12_Marks, lineValue: 26000 },
      ],
    },
  };

  let max_marks = Math.max(con.studData.G1,)

  let Percentage = (con.studData.failures/8)*100

  const passingPercentage = [
    { name: 'Passed', value: Percentage},
    { name: 'Failed', value: 100 - Percentage },
  ];


  console.log(con.studData.failures)
  console.log(Percentage)

  

  const [selectedYear, setYear] = useState('Overall');
  const { semesterData, schoolData } = dataSets[selectedYear];

  let avg_secondary =  (con.studData.Grade_8_Marks + con.studData.Grade_9_Marks + con.studData.Grade_10_Marks + con.studData.Grade_11_Marks + con.studData.Grade_12_Marks) / 5

  let avg_higher = (con.studData.G1 + con.studData.G2 + con.studData.G3 + con.studData.G4 + con.studData.G5)/5

  const compareEd = [
    {name:"Average Secondary Education Marks", value:avg_secondary},
    {name:"Average Higher Education Marks", value:avg_higher}
  ]

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="sidebar bg-gray-100 p-5 h-[120vh] shadow-lg">
        <h2 className="font-bold text-xl mb-4">Student Details</h2>
        <div className="details-card bg-white p-5 rounded-lg shadow">
          <p><strong>Name:</strong> {studentDetails.name}</p>
          <p><strong>Branch:</strong> {studentDetails.branch}</p>
          <p><strong>Semester:</strong> {studentDetails.semester}</p>
        </div>
        
        <div className="details-card bg-white p-5 rounded-lg shadow mt-4">
          <p><strong>Category:</strong> {studentDetails.category}</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-4 gap-4 p-5 flex-1 bg-white h-[50vh]">
        
        {/* Details Cards */}
        
        {/* <div className="card bg-white p-5 rounded-lg shadow">Details - Student Name</div>
        <div className="card bg-white p-5 rounded-lg shadow">Category - Class</div>
        <div className="card bg-white p-5 rounded-lg shadow">Max Marks </div> */}

        {/* Semester Score Graph (Bar + Line Chart) */}
        <div className="col-span-2 bg-white p-5 pb-0 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Semester Scores Overview ({selectedYear})</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={semesterData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Bar dataKey="barValue" fill="#8884d8" />
              <LineChart data={semesterData}>
                <Line type="monotone" dataKey="lineValue" stroke="#ff7300" />
              </LineChart>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* School Score Graph (Bar + Line Chart) */}
        <div className="col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">School Scores Overview (8-12)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={schoolData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Bar dataKey="barValue" fill="#82ca9d" />
              <LineChart data={schoolData}>
                <Line type="monotone" dataKey="lineValue" stroke="#ff7300" />
              </LineChart>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart for Passing Percentage */}
        <div className="col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Passing Percentage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={passingPercentage}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label 
              >
                {passingPercentage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Secondary Education vs Higher Education */}
        <div className="col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Secondary Education vs Higher Education</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data= {compareEd}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              >
                {passingPercentage.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;

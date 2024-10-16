import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const passingPercentage = [
  { name: 'Passed', value: 85 },
  { name: 'Failed', value: 15 },
];

const COLORS = ['#0088FE', '#FF8042'];

const studentDetails = {
  name: 'Gaurav bhau',
  branch: 'Computer Science',
  year: '2nd Year',
  roll: 'CS123456',
  category: 'Weak',
};


const dataSets = {

  Overall: {
    semesterData: [
      { name: 'Sem 1', barValue: 20000, lineValue: 22000 },
      { name: 'Sem 2', barValue: 24000, lineValue: 26000 },
      { name: 'Sem 3', barValue: 28000, lineValue: 29000 },
      { name: 'Sem 4', barValue: 32000, lineValue: 34000 },
      { name: 'Sem 5', barValue: 36000, lineValue: 37000 },
    ],
    schoolData: [
      { name: '8th', barValue: 15000, lineValue: 18000 },
      { name: '9th', barValue: 18000, lineValue: 20000 },
      { name: '10th', barValue: 20000, lineValue: 22000 },
      { name: '11th', barValue: 22000, lineValue: 23000 },
      { name: '12th', barValue: 24000, lineValue: 26000 },
    ],
  },
};


const StudentDashboard = () => {
  const [selectedYear, setYear] = useState('Overall');
  const { semesterData, schoolData } = dataSets[selectedYear];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="sidebar bg-gray-100 p-5 h-[120vh] shadow-lg">
        <h2 className="font-bold text-xl mb-4">Student Details</h2>
        <div className="details-card bg-white p-5 rounded-lg shadow">
          <p><strong>Name:</strong> {studentDetails.name}</p>
          <p><strong>Branch:</strong> {studentDetails.branch}</p>
          <p><strong>Year:</strong> {studentDetails.year}</p>
          <p><strong>Roll No:</strong> {studentDetails.roll}</p>
        </div>
        
        <div className="details-card bg-white p-5 rounded-lg shadow mt-4">
          <p><strong>Category:</strong> {studentDetails.category}</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-4 gap-4 p-5 flex-1 bg-white">
        
        {/* Details Cards */}
        <div className="card bg-white p-5 rounded-lg shadow">Details - Student Name</div>
        <div className="card bg-white p-5 rounded-lg shadow">Category - Class</div>
        <div className="card bg-white p-5 rounded-lg shadow">Max Marks - 98%</div>

        {/* Semester Score Graph (Bar + Line Chart) */}
        <div className="col-span-2 bg-white p-5 rounded-lg shadow">
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

      </div>
    </div>
  );
};

export default StudentDashboard;

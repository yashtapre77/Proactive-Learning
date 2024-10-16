import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Rectangle, Legend } from 'recharts';

const overallData = [
  { name: 'Jan', value: 20000 },
  { name: 'Feb', value: 24000 },
  { name: 'Mar', value: 28000 },
  { name: 'Apr', value: 32000 },
  { name: 'May', value: 36000 },
  { name: 'Jun', value: 40000 },
];

const thirdYearData = [
  { name: 'Jan', value: 10000 },
  { name: 'Feb', value: 12000 },
  { name: 'Mar', value: 14000 },
];

const fourthYearData = [
  { name: 'Jul', value: 22000 },
  { name: 'Aug', value: 24000 },
  { name: 'Sep', value: 26000 },
];

const pieDataOverall = [
  { name: 'Weak', value: 400 },
  { name: 'Average', value: 300 },
  { name: 'Strong', value: 300 },
];

const pieDataThirdYear = [
  { name: 'Weak', value: 200 },
  { name: 'Average', value: 100 },
  { name: 'Strong', value: 50 },
];

const pieDataFourthYear = [
  { name: 'Weak', value: 100 },
  { name: 'Average', value: 150 },
  { name: 'Strong', value: 200 },
];

const projectsOverall = [
  { name: 'Project A', progress: 100 },
  { name: 'Project B', progress: 100 },
  { name: 'Project C', progress: 70 },
];

const projectsThirdYear = [
  { name: 'Project A', progress: 50 },
  { name: 'Project B', progress: 70 },
  { name: 'Project C', progress: 30 },
];

const projectsFourthYear = [
  { name: 'Project A', progress: 80 },
  { name: 'Project B', progress: 60 },
  { name: 'Project C', progress: 40 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
  const [selectedYear, setYear] = useState('Overall'); 

  let barChartData;
  let cardTitle;
  let pieChartData;
  let projectsData;

  if (selectedYear === '3rdYear') {
    barChartData = thirdYearData;
    cardTitle = '3rd Year';
    pieChartData = pieDataThirdYear;
    projectsData = projectsThirdYear;
  } else if (selectedYear === '4thYear') {
    barChartData = fourthYearData;
    cardTitle = '4th Year';
    pieChartData = pieDataFourthYear;
    projectsData = projectsFourthYear;
  } else {
    barChartData = overallData; 
    cardTitle = 'Overall';
    pieChartData = pieDataOverall;
    projectsData = projectsOverall;
  }

  return (
    <div className="flex dashboard-container">
      {/* Sidebar component */}
      <div className="sidebar bg-gray-100 p-5 h-screen shadow-lg">
        <h2 className="font-bold text-xl mb-4">Select Year</h2>
        <button onClick={() => setYear('Overall')} className="block w-full my-2 p-3 bg-blue-500 text-white rounded">Overall</button>
        <button onClick={() => setYear('3rdYear')} className="block w-full my-2 p-3 bg-blue-500 text-white rounded">3rd Year</button>
        <button onClick={() => setYear('4thYear')} className="block w-full my-2 p-3 bg-blue-500 text-white rounded">4th Year</button>
      </div>

      <div className="grid grid-cols-4 gap-4 p-5 flex-1">
        <div className="card bg-white p-5 rounded-lg shadow">{cardTitle} - Total strength</div>
        <div className="card bg-white p-5 rounded-lg shadow">{cardTitle} - Total Departments</div>
        <div className="card bg-white p-5 rounded-lg shadow">{cardTitle} - Highest Mark</div>
        <div className="card bg-white p-5 rounded-lg shadow">{cardTitle} - Median Score</div>
        <div className="bar-chart col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{cardTitle} Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="pie-chart col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{cardTitle} Strength Distribution</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="projects col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Projects</h3>
          {projectsData.map((project, index) => (
            <div key={index} className="project-item mb-4">
              <span className="block font-bold">{project.name}</span>
              <progress className="progress progress-success" value={project.progress} max="100"></progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

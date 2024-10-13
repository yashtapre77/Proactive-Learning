import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Sidebar from './Sidebar';

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

  let lineChartData;
  let cardTitle;
  let pieChartData;
  let projectsData;

  if (selectedYear === '3rdYear') {
    lineChartData = thirdYearData;
    cardTitle = '3rd Year';
    pieChartData = pieDataThirdYear;
    projectsData = projectsThirdYear;
  } else if (selectedYear === '4thYear') {
    lineChartData = fourthYearData;
    cardTitle = '4th Year';
    pieChartData = pieDataFourthYear;
    projectsData = projectsFourthYear;
  } else {
    lineChartData = overallData; 
    cardTitle = 'Overall';
    pieChartData = pieDataOverall;
    projectsData = projectsOverall;
  }

  return (
    <div className="flex dashboard-container">
      <Sidebar setYear={setYear} />

      <div className="grid grid-cols-4 gap-4 p-5 flex-1">

        <div className="card bg-white p-5 rounded-lg shadow">{cardTitle} - Highest Mark</div>
        <div className="card bg-white p-5 rounded-lg shadow">{cardTitle} - Lowest Mark</div>
        <div className="card bg-white p-5 rounded-lg shadow">{cardTitle} - Median Score</div>
        <div className="line-chart col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{cardTitle} Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
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

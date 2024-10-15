import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const studentDetails = {
  name: 'Gaurav bhau',
  branch: 'Computer Science',
  year: '2nd Year',
  roll: 'CS123456',
  category: 'Weak',
};

const predictedSemesterData = [
  { name: 'Sem 1', predicted: 70 },
  { name: 'Sem 2', predicted: 75 },
  { name: 'Sem 3', predicted: 80 },
  { name: 'Sem 4', predicted: 85 },
];

const avgScoreData = [
  { name: 'Actual Avg Score', value: 75 },
  { name: 'Remaining', value: 25 },
];

const predictedAvgScoreData = [
  { name: 'Predicted Avg Score', value: 80 },
  { name: 'Actual Avg Score', value: 75 },
  { name: 'Remaining', value: 20 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const StudentRecommendations = () => {
  return (
    <div className="flex dashboard-container">
      <div className="sidebar bg-gray-100 p-5 h-[143vh] shadow-lg">
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

      <div className="grid grid-cols-4 gap-4 p-5 flex-1">
        {/* Predicted Semester Score Graph */}
        <div className="col-span-4 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Predicted Semester Score</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={predictedSemesterData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Line type="monotone" dataKey="predicted" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart - Avg Score */}
        <div className="col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Average Score</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={avgScoreData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {avgScoreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Donut Chart - Predicted Avg Score */}
        <div className="col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Predicted vs Actual Avg Score</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={predictedAvgScoreData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {predictedAvgScoreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Rationale Section */}
        <div className="col-span-4 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Rationale</h3>
          <p>The predicted scores are based on past performance trends. We used historical data from previous semesters to estimate future outcomes.</p>
        </div>

        {/* Recommendation Section */}
        <div className="col-span-4 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Recommendations</h3>
          <p>Focus on strengthening weaker areas. Consider participating in extra projects or taking specialized courses to improve performance in the upcoming semester.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentRecommendations;

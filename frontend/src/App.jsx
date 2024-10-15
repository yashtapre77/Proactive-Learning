import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Footer from './components/Footer.jsx';
import StudentDashboard from './pages/studentDashboard.jsx';
import StudentRecommendations from './pages/studentRecommendation.jsx';
import Students from './pages/Students.jsx';
import './App.css';
import AddStudent from './pages/AddStudent.jsx';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/student-recommendations" element={<StudentRecommendations />} />
              <Route path="/students" element={<Students />} />
            
              <Route path='/AddStudent' element={<AddStudent/>}></Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

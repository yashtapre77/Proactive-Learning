import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Footer from './components/Footer.jsx';
import StudentDashboard from './pages/studentDashboard.jsx';
import StudentRecommendations from './pages/studentRecommendation.jsx';
import Students from './pages/Students.jsx';
import AddStudent from './pages/AddStudent.jsx';
import AuthTabs from './pages/login.jsx'; // Your authentication component
import UserProfile from './pages/UserProfile.jsx';
import InpComponent from './components/InpComponent.jsx';
import { StudentDataContext } from './contexts/context.js';
import data from "./contexts/context.js";
import LandingPage from './pages/landing.jsx';

function App() {
  const [studData, setStudData] = useState(data);

  return (
    <StudentDataContext.Provider value={{ studData, setStudData }}>
      <Router>
        <div className="flex flex-col min-h-[100vh]">
          <Header />
          <div className="">
            <main className="">
              <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="/loginSignUp" element={<AuthTabs />} />
                <Route path="/student-dashboard" element={<StudentDashboard />} />
                <Route path="/student-recommendations" element={<StudentRecommendations />} />
                <Route path="/students" element={<Students />} />
                <Route path="/AddStudent" element={<AddStudent />} />
                <Route path="/studentprofile" element={<UserProfile />} />
                <Route path="/inpcomponent" element={<InpComponent />} />
              </Routes>
            </main>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </Router>
    </StudentDataContext.Provider>
  );
}

export default App;

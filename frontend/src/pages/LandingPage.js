import React from 'react';
import Navbar from '../components/Navbar';
import SignUpButton from '../components/SignUpButton';
import './LandingPage.css'; // Custom CSS for styling
import illustration from '../hero-Image.jpg'; // Ensure correct image path

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="hero-section">
        <div className="left-content">
          <h1>Proactive Learning</h1>
          <p>
          The project aims to develop a predictive analytics solution that identifies students at risk of academic
challenges by analyzing academic performance, attendance records, and socioeconomic indicators.
Educational institutions often struggle to detect and address the root causes of student underperformance,
leading to delayed interventions. By leveraging data-driven insights, the solution seeks to proactively
identify students facing difficulties and pinpoint contributing factors, enabling timely and targeted
interventions. The ultimate goal is to improve student outcomes, reduce dropout rates, and provide a more
equitable educational environment by addressing the unique needs of each student early in their academic
journey.
          </p>
          <SignUpButton />
        </div>
        <div className="right-image">
          <img src={illustration} alt="Consultancy illustration" />
        </div>
      </div>
       {/* Footer Section */}
       <footer className="footer">
        <p>&copy; 2024 Proactive Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

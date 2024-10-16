import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';
import ProfileIcon from './ProfileIcon';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Proactive-Learning</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/loginSignUp">Login</Link></li>
          <li><Link to="/student-dashboard">Student Dashboard</Link></li>
          <li><Link to="/students">Students</Link></li>
          {/* Uncomment the next line if you want to add the recommendations link back */}
          {/* <li><Link to="/student-recommendations">Student Recommendations</Link></li> */}
        </ul>
      </nav>
      <div>
        <Link to="/studentprofile"><ProfileIcon /></Link>
      </div>
    </header>
  );
};

export default Header;

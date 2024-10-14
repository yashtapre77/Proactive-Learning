import React from 'react';
import {Link} from "react-router-dom"
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Proactive-Learning</div>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/student-dashboard">Student Dashboard</Link></li>
          <li><Link to="/student-recommendations">Student Recommendations</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';
import ProfileIcon from './ProfileIcon';
import icon from "../assets/icon.png"

const Header = () => {
  return (
    <header className="header">
      <div className="">
        <img className="w-[2vw]" src={icon} alt="" />
        <div className="">Proactive-Learning</div>
      </div>
      <nav>
        <ul>
          <li className="text-lg"><Link to="/home">Home</Link></li>
          <li className="text-lg" ><Link to="/students">Students</Link></li>
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

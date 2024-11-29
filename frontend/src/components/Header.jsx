import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';
import ProfileIcon from './ProfileIcon';
import icon from "../assets/icon.png"

const Header = () => {
  return (
    <header className="header bg-[#471B4A]">
      <div className="">
        <img className="w-[2vw]" src={icon} alt="" />
        <div className="">Proactive-Learning</div>
      </div>
      <nav>
        <ul>
          <li className="text-xl"><Link to="/home">Home</Link></li>
          <li className="text-xl" ><Link to="/students">Students</Link></li>
          {/* <li className="text-lg"><Link to="/student-recommendations">About</Link></li> */}
        </ul>
      </nav>
      <div>
        <Link to="/studentprofile"><ProfileIcon /></Link>

      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import logo from "../../assets/logo.png";
import "../../style/navbar.css";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="h-[10vh] shadow-md bg-white flex justify-between">

        <div className="flex h-[100%] items-center">
          <img className="nav_logo_img" src={logo} alt="Logo" />
          <p className="nav_logo_title">Proactive Learning</p>
        </div>

        <nav>
          <div className="h-[100%] flex justify-center items-center">
            <NavLink to="/" activeClassName="active">
              <p className="nav_lis">Home</p>
            </NavLink>
             
            <NavLink to="/students" activeClassName="active">
              <p className="nav_lis">Students</p>
            </NavLink>
          </div>        
        </nav>

        <div>
          <h1>Profile</h1>
        </div>

      </div>
    </div>
  );
}

export default Navbar;

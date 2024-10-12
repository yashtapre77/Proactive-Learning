import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Logo from './Logo';
import SignInButton from './SignInButton';
import './Navbar.css'; // Custom CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-links">
      <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <a href="#news">
            <i className="fas fa-newspaper"></i> Latest News
          </a>
        </li>
        <li>
          <a href="#colleges">
            <i className="fas fa-university"></i> Colleges
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fas fa-info-circle"></i> About
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fas fa-phone-alt"></i> Contact
          </a>
        </li>
      </ul>
      <SignInButton />
    </nav>
  );
};

export default Navbar;

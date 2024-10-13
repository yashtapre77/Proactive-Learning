import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Proactive-Learning</div>
      <nav>
        <ul>
          <li><a href="/">Link 1</a></li>
          <li><a href="/">Link 2</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import logo from '../logo.png'; // Corrected import path to use relative path

function Logo() {
  return (
    <img 
      src={logo} 
      alt="Proactive Learning Logo" 
      style={{ width: '200px', height: 'auto' }} 
    />
  );
}

export default Logo;


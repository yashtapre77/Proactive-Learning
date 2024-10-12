// src/components/SignUpButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpButton.css'; // Custom CSS for styling

const SignUpButton = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <button className="signup-button" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};

export default SignUpButton;

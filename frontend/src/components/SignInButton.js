// src/components/SignInButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInButton.css'; // Custom CSS for styling

const SignInButton = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <button className="signin-button" onClick={handleSignIn}>
      Sign In
    </button>
  );
};

export default SignInButton;

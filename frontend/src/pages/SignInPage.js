import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import './SignInPage.css'; 
import illustration from '../go.png'; // Ensure correct image path

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign In", { email, password });
  };

  const handleGoogleSignIn = (credentialResponse) => {
    // Handle the response from Google after successful sign-in
    console.log(credentialResponse);
    // You can extract user info and handle your authentication logic here
  };

  return (
    <>
      <Navbar /> {/* Include the Navbar at the top */}
      <div className="signin-page">
        <form onSubmit={handleSignIn} className="signin-form">
          <h2>Sign In</h2>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              required
            />
          </div>

          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="signin-button">
            Sign in
          </button>

          <p className="signup-message">
            Don't have an account yet? <a href="/signup">Sign up</a>
          </p>

          <div className="or-divider">
            <span>OR</span>
          </div>

          <GoogleLogin
            onSuccess={handleGoogleSignIn} // Handle successful sign-in
            onError={(error) => {
              console.error('Login Failed:', error);
            }}
          >
            <button className="google-signin-button" aria-label="Sign in with Google" role="button">
              <img src={illustration} alt="Google logo" className="google-logo" />
              <figcaption className="google-text">Sign in with Google</figcaption>
            </button>
          </GoogleLogin>
        </form>
      </div>

      {/* Footer added below */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; © 2024 Proactive Learning. All rights reserved.</p>
          <ul className="footer-links">
          </ul>
        </div>
      </footer>
    </>
  );
};

export default SignInPage;

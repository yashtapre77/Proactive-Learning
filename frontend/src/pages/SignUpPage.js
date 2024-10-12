import React, { useState } from 'react';
import NavigationBar from '../components/Navbar';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import './SignUpPage.css';
import illustration from '../go.png'; // Ensure correct image path

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleGoogleSignIn = (credentialResponse) => {
    console.log(credentialResponse);
    // Add Google sign-in logic here
  };

  return (
    <>
      <NavigationBar />
      <div className="signup-page">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="form-group">
            <label>You Are</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="******"
              required
            />
          </div>
          <p className="terms">
            By clicking Sign Up, you agree to our{' '}
            <a href="/terms">Terms</a>, <a href="/privacy">Privacy Policy</a>,
            and <a href="/cookies">Cookies Policy</a>.
          </p>
          <button type="submit" className="sign-up-btn">
            Sign Up
          </button>
          <div className="already-have-account">
            Already Have an Account? <a href="/signin">Sign In</a>
          </div>
          <div className="separator">OR</div>

          <GoogleLogin
            onSuccess={handleGoogleSignIn} // Handle successful sign-in
            onError={(error) => {
              console.error('Login Failed:', error);
            }}
          >
            <button type="button" className="google-btn">
              <img
                src={illustration}
                alt="Google logo"
                className="google-logo"
                width="20"
                height="20"
              />
              <span className="google-text">Sign in with Google</span>
            </button>
          </GoogleLogin>
        </form>
      </div>
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

export default SignUpPage;

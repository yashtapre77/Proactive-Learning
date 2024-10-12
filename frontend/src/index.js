// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the client version for React 18
import './index.css'; // Custom global styles
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual client ID

// Create a root element using ReactDOM.createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App within StrictMode and wrap it with GoogleOAuthProvider
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();

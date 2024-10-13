import React from 'react';
import Header from './components/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './App.css';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

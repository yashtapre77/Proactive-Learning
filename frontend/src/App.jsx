import React from 'react';
import Header from './components/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './App.css';
import Footer from './components/Footer.jsx';
import Students from './pages/Students.jsx';
import AddStudent from './pages/AddStudent.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
      <Header />
        <div className="content">
          <main className="main-content">
            <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='/Students' element={<Students/>}></Route>
              <Route path='/AddStudent' element={<AddStudent/>}></Route>
            </Routes>
          </main>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

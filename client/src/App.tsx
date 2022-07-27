import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={'not found'} />
          <Route path='/login' element='cc'/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Detail from './page/Detail';
import Login from './page/Login';
import Register from './page/Register';
import Dashboard from './page/admin/Dashboard';

function App() {
  const [openAdmin, setOpenAdmin] = useState(false);


  return (
    <Router>
      <div className="App">
        {!openAdmin ? <Navbar /> : null}

        <Routes>
          <Route path='/' element={<HomePage setOpenAdmin={setOpenAdmin} />} />
          <Route path='*' element={'not found'} />
          <Route path='/login' element={<Login />} />
          <Route path='/res' element={<Register />} />
          <Route path='/detail-product/:productId' element={<Detail />} />
          <Route path='/admin' element={<Dashboard setOpenAdmin={setOpenAdmin} />} />
        </Routes>

        {!openAdmin ? <Footer /> : null}
      </div>
    </Router>
  );
}

export default App;

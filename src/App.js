import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import './App.css'; // Make sure to import your CSS file for styling

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <nav className="nav-as">
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/dashboard">
          <a>Dashboard</a>
        </Link>
        <Link to="/transactions">
          <a>Transactions</a>
        </Link>
        <Link to="/register">
          <a>Register</a>
        </Link>
        <Link to="/login">
          <a>Login</a>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;


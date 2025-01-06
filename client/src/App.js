import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Transaction from "./pages/transaction";
import "./App.css"; // Add custom styles here

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <Router>
            {/* Wrap the navbar conditionally inside Router */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {user && (
                                <header className="custom-navbar">
                                    <div className="navbar-container">
                                        <Link to="/" className="navbar-brand">Fast-Pay</Link>
                                        <nav className="navbar-links">
                                            <Link to="/transaction" className="navbar-link">Home</Link>
                                            <div className="dropdown">
                                                <span className="dropdown-toggle">
                                                    <i className="bi bi-person-circle"></i> {user.email}
                                                </span>
                                                <div className="dropdown-menu">
                                                    <button onClick={handleLogout} className="dropdown-item">Logout</button>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </header>
                            )}
                            <Home />
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/transaction"
                    element={
                        <>
                            {user && (
                                <header className="custom-navbar">
                                    <div className="navbar-container">
                                        <Link to="/" className="navbar-brand">Fast-Pay</Link>
                                        <nav className="navbar-links">
                                            <Link to="/transaction" className="navbar-link">Home</Link>
                                            <div className="dropdown">
                                                <span className="dropdown-toggle">
                                                    <i className="bi bi-person-circle"></i> {user.email}
                                                </span>
                                                <div className="dropdown-menu">
                                                    <button onClick={handleLogout} className="dropdown-item">Logout</button>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </header>
                            )}
                            <Transaction />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

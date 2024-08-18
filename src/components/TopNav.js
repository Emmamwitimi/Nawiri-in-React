import React, { useState } from 'react';
import './TopNav.css';

const TopNav = ({ onLogin, onSignup, onProfile, isLoggedIn, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value); // Send the search query back to App
    };

    return (
        <div className="top-nav">
            <div className="logo-container">
                <img src="./images/Neda.png" alt="App Logo" className="logo" />
            </div>
            <div className="app-name">
                <h1>Nawiri</h1>
            </div>
            <div className="search-bar-container">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    className="search-bar" 
                />
            </div>
            <div className="auth-buttons">
                {isLoggedIn ? (
                    <button className="profile-btn" onClick={onProfile}>Profile</button>
                ) : (
                    <>
                        <button className="login-btn" onClick={onLogin}>Login</button>
                        <button className="signup-btn" onClick={onSignup}>Sign up</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TopNav;

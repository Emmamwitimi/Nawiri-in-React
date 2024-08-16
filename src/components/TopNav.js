import React from 'react';
import './TopNav.css';

const TopNav = ({ onLogin, onSignup, onProfile, isLoggedIn }) => {
    return (
        <div className="top-nav">
            <div className="logo-container">
                <img src="./images/Neda.png" alt="App Logo" className="logo" />
            </div>
            <div className="app-name">
                <h1>Nawiri</h1>
            </div>
            <div className="search-bar-container">
                <input type="text" placeholder="Search..." className="search-bar" />
                <button>search</button>
            </div>
            <div className="auth-buttons">
                {isLoggedIn ? (
                    <button className="profile-btn" onClick={onProfile}>Profile</button>
                ) : (
                    <>
                        <button className="login-btn" onClick={onLogin}>Login</button>
                        <button className="signup-btn" onClick={onSignup}>Sign Up</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TopNav;

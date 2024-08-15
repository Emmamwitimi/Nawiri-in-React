import React from 'react';
import './TopNav.css';

const TopNav = ({ onLogin, onSignup, onProfile, isLoggedIn }) => {
    return (
        <div className="top-nav">
            <div className="nav-items">
                <button onClick={onLogin}>Login</button>
                <button onClick={onSignup}>Signup</button>
                {isLoggedIn && (
                    <button onClick={onProfile}>Profile</button>
                )}
            </div>
        </div>
    );
};

export default TopNav;

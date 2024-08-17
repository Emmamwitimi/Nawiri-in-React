import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNav.css';

const LeftNav = () => {
    return (
        <nav className="left-nav">
            <NavLink to="/" className="nav-link" activeClassName="active">
                Home
            </NavLink>
            <NavLink to="/profile" className="nav-link" activeClassName="active">
                Profile
            </NavLink>
            <NavLink to="/activities" className="nav-link" activeClassName="active">
                Activities
            </NavLink>
            <NavLink to="/resources" className="nav-link" activeClassName="active">
                Resources
            </NavLink>
        </nav>
    );
};

export default LeftNav;

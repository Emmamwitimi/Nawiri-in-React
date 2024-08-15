import React from 'react';
//import './LeftNav.css';

const LeftNav = ({ onSelectSection }) => {
  return (
    <div className="left-nav">
      <ul>
        <li onClick={() => onSelectSection('home')}>Home</li>
        <li onClick={() => onSelectSection('profile')}>Profile</li>
        <li onClick={() => onSelectSection('activities')}>Activities</li>
        <li onClick={() => onSelectSection('settings')}>Settings</li>
        <li onClick={() => onSelectSection('logout')}>Logout</li>
      </ul>
    </div>
  );
};

export default LeftNav;

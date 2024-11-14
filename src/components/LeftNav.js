import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LeftNav() {
  return (
    <nav className="w-64 text-black h-screen bg-gray-90 shadow-lg p-6 space-y-6">
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-3 px-5 rounded-lg transition-transform transform duration-300 ease-in-out
               ${isActive ? 'bg-green-700 text-white' : 'bg-white hover:bg-green-100'} 
               shadow-md hover:scale-105`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block py-3 px-5 rounded-lg transition-transform transform duration-300 ease-in-out
               ${isActive ? 'bg-green-700 text-white' : 'bg-white hover:bg-green-100'} 
               shadow-md hover:scale-105`
            }
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

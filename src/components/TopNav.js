import React from 'react';

export default function TopNav({ onAuthClick }) {
  return (
    <nav className="bg-green-800 p-6 shadow-lg flex justify-between items-center">
      {/* Logo and Title */}
      <div className="flex justify-between items-center">
        <img src="/images/NEDA.png" alt="Logo" className="h-8 mr-2" />
      </div>
      <h1 className="text-lg font-semibold text-white">Nawiri</h1>
      {/* Auth Buttons */}
      <div>
        <button
          onClick={() => onAuthClick('login')}
          className="bg-darkTeal hover:bg-green-800  text-white px-4 py-2 rounded mr-2"
        >
          Login
        </button>
        <button
          onClick={() => onAuthClick('signup')}
          className=" hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          Signup
        </button>
      </div>
    </nav>
  );
}

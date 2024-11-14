import React, { useState } from 'react';
import Auth from '../components/Auth';
import TopNav from '../components/TopNav';

export default function LandingPage() {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const openAuth = (mode) => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const closeAuth = () => {
    setShowAuth(false);
  };

  return (
    <div 
      className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: "url('/LandingImage.jpg')" }}
    >
      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 w-full">
        <TopNav onAuthClick={openAuth} />
      </div>

      {/* Centered Welcome Message */}
      <h1 className="text-5xl font-bold text-white drop-shadow-lg mt-8">
        Welcome to Nawiri!
      </h1>

      {/* Auth Modal */}
      {showAuth && <Auth mode={authMode} onClose={closeAuth} />}
    </div>
  );
}

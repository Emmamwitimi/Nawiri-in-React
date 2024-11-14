import React from 'react';

const ProfileCards = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Account</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="profile-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Personal Info</h4>
          <p className="text-gray-500">Contact details...</p>
        </div>
        <div className="profile-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Security and Login</h4>
          <p className="text-gray-500">Change your password...</p>
        </div>
        <div className="profile-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h4 className="text-xl font-semibold text-gray-700 mb-2">Payments and Payouts</h4>
          <p className="text-gray-500">Bookings...</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;

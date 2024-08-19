import React from 'react';
import "./ProfileCards.css";

const ProfileCards = () => {
  return (
    <div >
        <div className='top-heading'>
          {<h2>Account</h2>}
        </div>
          <div className='profile-cards-container'>
          <div className='profile-card'>
              <h4>Personal info</h4>
              <p>contact details....</p>
          </div>
          <div className='profile-card'>
              <h4>security and login</h4>
              <p>change your password....</p>
          </div>
          <div className='profile-card'>
              <h4>Payments and payouts</h4>
              <p>bookings....</p>
          </div>
        </div>
    </div>
  )
}

export default ProfileCards;

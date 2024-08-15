import React from 'react';
import './HouseCard.css';

const HouseCard = ({ house, onBookNow }) => {
    return (
        <div className="house-card">
            <h2>{house.name}</h2>
            <img src={house.images[0]} alt={house.name} />
            <p>{house.description}</p>
            <button onClick={onBookNow}>Book Now</button>
        </div>
    );
};

export default HouseCard;

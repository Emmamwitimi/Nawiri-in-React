import React from 'react';
import './HouseCards.css';

const HouseCards = ({ houses, onCardClick }) => {
    return (
        <div className="house-cards-container">
            {houses.map(house => (
                <div className="house-card" key={house.id} onClick={() => onCardClick(house)}>
                    <div className="house-images">
                        <img src={house.images[0]} alt={house.name} className="house-image" />
                        {/* Additional images can be included in a carousel or gallery */}
                    </div>
                    <h2 className="house-name">{house.name}</h2>
                    <p className="house-location">{house.location}</p>
                    <p className="house-description">{house.description}</p>
                    <button className="booking-button">Book Now</button>
                </div>
            ))}
        </div>
    );
};

export default HouseCards;

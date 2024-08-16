import React from 'react';
import './HouseCards.css';

const HouseCards = ({ houses, onCardClick }) => {
    return (
        <div className="house-cards-container">
            {houses.map(house => (
                <div className="house-card" key={house.id} onClick={() => onCardClick(house)}>
                    <div className="house-images">
                        <img src={house.images[0]} alt={house.name} className="house-image" />
                        <img src={house.images[1]} alt={house.name} className="house-image" />
                        <img src={house.images[2]} alt={house.name} className="house-image" />
                        <img src={house.images[3]} alt={house.name} className="house-image" />
                    </div>
                    <h2 className="house-name">{house.name}</h2>
                    <p className="house-description">{house.description}</p>
                    <button className="booking-button">Book Now</button>
                </div>
            ))}
        </div>
    );
};

export default HouseCards;

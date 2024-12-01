import React from 'react';

const HouseCards = ({ houses, onCardClick }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {houses.map(house => (
                <div 
                    key={house.id} 
                    onClick={() => onCardClick(house)} 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="house-images">
                        <img 
                            src={house.images[0]} 
                            alt={house.name} 
                            className="w-full h-48 object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{house.name}</h2>
                        <p className="text-gray-600 mb-4">{house.description}</p>
                        <button 
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors duration-200"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevents triggering onCardClick
                                onCardClick(house);
                            }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HouseCards;

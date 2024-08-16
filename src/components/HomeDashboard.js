import React, { useState, useEffect } from 'react';
import HouseCards from './HouseCards';
import BookingForm from './BookingForm';
import './HomeDashboard.css';

const HomeDashboard = ({ houses,selectedLocation, setSelectedLocation }) => {
    //const [selectedLocation, setSelectedLocation] = useState('All');
    const [filteredHouses, setFilteredHouses] = useState([]);
    const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
    const [currentHouse, setCurrentHouse] = useState(null);

    useEffect(() => {
        // Filter houses based on selected location
        if (selectedLocation === 'All') {
            setFilteredHouses(houses);
        } else {
            setFilteredHouses(houses.filter(house => house.location === selectedLocation));
        }
    }, [selectedLocation, houses]);

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value); // Update selected location
    };

    const handleBookNow = (house) => {
        setCurrentHouse(house); // Set the current house for booking
        setIsBookingFormOpen(true); // Open the booking form
    };

    const handleCloseBookingForm = () => {
        setIsBookingFormOpen(false); // Close the booking form
        setCurrentHouse(null); // Clear the current house
    };

    // Get unique locations for the filter dropdown
    const locations = Array.from(new Set(houses.map(house => house.location))).sort();

    return (
        <div className="dashboard">
            {/* Filter Dropdown */}
            <div className="filter-container">
                <label htmlFor="locationFilter">Filter by Location:</label>
                <select id="locationFilter" value={selectedLocation} onChange={handleLocationChange}>
                    <option value="All">All</option>
                    {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
            </div>

            {/* House Cards */}
            <div className="house-cards">
                {filteredHouses.map(house => (
                    <HouseCards
                        key={house.id}
                        house={house}
                        onBookNow={() => handleBookNow(house)}
                    />
                ))}
            </div>

            {/* Booking Form */}
            {isBookingFormOpen && <BookingForm house={currentHouse} onClose={handleCloseBookingForm} />}
        </div>
    );
};

export default HomeDashboard;

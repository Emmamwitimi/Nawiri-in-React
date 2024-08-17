import React, { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import HouseCards from './components/HouseCards';
import BookingForm from './components/BookingForm';
import './App.css';

const App = () => {
    const [houses, setHouses] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // Track search query

    useEffect(() => {
        // Fetch data from JSON file
        fetch('/houses.json')
            .then((response) => response.json())
            .then((data) => setHouses(data.houses))
            .catch((error) => console.error('Error fetching houses:', error));
    }, []);

    const handleFilterChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleCardClick = (house) => {
        setSelectedHouse(house);
    };

    const handleCloseForm = () => {
        setSelectedHouse(null);
    };

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    // Filter houses by location and search query
    const filteredHouses = houses.filter((house) => {
        const matchesLocation = !selectedLocation || house.location === selectedLocation;
        const matchesSearchQuery = house.name.toLowerCase().includes(searchQuery.toLowerCase()) || house.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLocation && matchesSearchQuery;
    });

    return (
        <div className="app">
            {/* Top Navigation Bar */}
            <TopNav 
                onLogin={() => {/* login */}} 
                onSignup={() => {/* signup */}} 
                onProfile={() => {/* profile */}} 
                isLoggedIn={false} // Update based on auth state
                onSearch={handleSearchQueryChange} // Pass search handler
            />

            {/* Main Content Area */}
            <div className="main-content">
                <LeftNav />

                {/* Main Page Content */}
                <div className="content-body">
                    {/* Filter and Search Bar */}
                    <div className="filter-container">
                        <label htmlFor="location-filter">Filter by Location:</label>
                        <select id="location-filter" onChange={handleFilterChange}>
                            <option value="">All</option>
                            {[...new Set(houses.map(house => house.location))].map(location => (
                                <option key={location} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>

                    {/* House Cards */}
                    <HouseCards 
                        houses={filteredHouses} 
                        onCardClick={handleCardClick} 
                    />

                    {/* Booking Form (displayed when a house is selected) */}
                    {selectedHouse && (
                        <BookingForm 
                            house={selectedHouse} 
                            onClose={handleCloseForm} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;

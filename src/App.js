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
    const [searchQuery, setSearchQuery] = useState('');

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

    const handleSearchQuery = (e) =>{
      e.preventDefault();
      setSearchQuery(e.target.value);
    };

    return (
        <div className="app">
            <TopNav 
                onLogin={() => {/* login */}} 
                onSignup={() => {/* signup */}} 
                onProfile={() => {/* profile */}} 
                isLoggedIn={false} // Update based on auth state
            />
            <div className="main-content">
                <LeftNav />
                <div className="content-body">
                    <div className="filter-container">
                        <label htmlFor="location-filter">Filter by Location:</label>
                        <select id="location-filter" onChange={handleFilterChange}>
                            <option value="">All</option>
                            {[...new Set(houses.map(house => house.location))].map(location => (
                                <option key={location} value={location}>{location}</option>
                            ))}
                        </select>
                    </div>
                    <HouseCards 
                        houses={houses.filter(house => !selectedLocation || house.location === selectedLocation)} 
                        onCardClick={handleCardClick} 
                    />
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

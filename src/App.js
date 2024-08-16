import React, { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import HouseCards from './components/HouseCards';
import BookingForm from './components/BookingForm';
import './App.css';

const App = () => {
   // State to manage the list of houses, selected location, selected house, and search query
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
// Handler for filter change event
    const handleFilterChange = (event) => {
        setSelectedLocation(event.target.value);
    };
 // Handler for clicking on a house card
    const handleCardClick = (house) => {
        setSelectedHouse(house);
    };

    // Handler for closing the booking form
    const handleCloseForm = () => {
        setSelectedHouse(null);
    };
 // Handler for search query change
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

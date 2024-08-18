import React, { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import HouseCards from './components/HouseCards';
import BookingForm from './components/BookingForm';
import Signup from './components/SignupForm';
import Login from './components/LoginForm';
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [houses, setHouses] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // Track search query

    // Fetch house data from JSON file
    useEffect(() => {
        fetch('/houses.json')
            .then((response) => response.json())
            .then((data) => setHouses(data.houses))
            .catch((error) => console.error('Error fetching houses:', error));
    }, []);


    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignup(false);
      };
    
      const handleSignupClick = () => {
        setShowSignup(true);
        setShowLogin(false);
      };
    
      const handleCloseForm = () => {
        setShowLogin(false);
        setShowSignup(false);
        setSelectedHouse(null);
      };
    
      const handleLogin = () => {
        setIsLoggedIn(true);
        setShowLogin(false);
      };

    const handleFilterChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleCardClick = (house) => {
        setSelectedHouse(house);
    };

    
    const handleSearchQueryChange = (query) => {
        setSearchQuery(query); // This updates the search query
    };

    // Filter houses by location and search query
    const filteredHouses = houses.filter((house) => {
        const matchesLocation = !selectedLocation || house.location === selectedLocation;
        const matchesSearchQuery = house.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            house.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLocation && matchesSearchQuery;
    });

    return (
        <div className="app">
            {/* Top Navigation Bar */}
            <TopNav
                onLogin={handleLoginClick}
                onSignup={handleSignupClick}
                onProfile={handleProfileClick}
                isLoggedIn={isLoggedIn}
                onSearch={setSearchQuery}
                onClose={handleCloseForm}
            />

            {/* Conditionally render login or signup form */}
            {showLogin && <Login onSignupClick={handleSignupClick} />}
            {showSignup && <Signup onLoginClick={handleLoginClick} />}


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
                        houses={filteredHouses} // Only filtered houses are passed to HouseCards
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

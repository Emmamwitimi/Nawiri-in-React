import React, { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';
import HomeDashboard from './components/HomeDashboard';
import './App.css';

const App = () => {
    const [houses, setHouses] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Fetch house data from JSON file
        fetch('/houses.json')
            .then(response => response.json())
            .then(data => {
                setHouses(data.houses); // Set the fetched data to state
            })
            .catch(error => console.error('Error fetching houses:', error));
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true); // Update login state
    };

    const handleSignup = () => {
        setIsLoggedIn(true); // Update signup state
    };

    const handleProfile = () => {
        // Handle profile actions
    };

    return (
        <div className="app">
            <TopNav
                onLogin={handleLogin}
                onSignup={handleSignup}
                onProfile={handleProfile}
                isLoggedIn={isLoggedIn}
            />
            <LeftNav />
            <HomeDashboard houses={houses} /> {/* Pass houses data to Dashboard */}
        </div>
    );
};

export default App;

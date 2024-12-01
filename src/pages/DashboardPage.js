import React, { useEffect, useState } from 'react';
import TopNav from '../components/TopNav';
import LeftNav from '../components/LeftNav';
import HouseCards from '../components/HouseCards';

export default function DashboardPage() {
    const [houses, setHouses] = useState([]);

    // Fetch houses.json data from the public folder
    useEffect(() => {
        fetch('/houses.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setHouses(data.houses))
            .catch(error => console.error('Error fetching houses:', error));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <TopNav />
            <div className="flex mt-6">
                {/* Left Navigation */}
                <LeftNav />
                <div className="flex-1 mt-6 px-6">
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    {/* House Cards Section */}
                    {houses.length > 0 ? (
                        <HouseCards 
                            houses={houses} 
                            onCardClick={(house) => console.log('House clicked:', house)} 
                        />
                    ) : (
                        <p>Loading houses...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

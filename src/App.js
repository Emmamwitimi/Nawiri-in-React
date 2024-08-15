import React, { useEffect, useState } from "react";
import HouseCard from "./components/HouseCard";

function App() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/houses")
            .then((response) => response.json())
            .then((data) => setHouses(data.houses)) // Access the houses array properly
            .catch((error) => console.error("Error fetching houses:", error));
    }, []);

    return (
        <div className="App">
            <h1>Welcome to Nawiri Retreats</h1>
            <HouseCard houses={houses} />
        </div>
    );
}

export default App;

import React, { useState } from "react";
import "./HouseCard.css"; // styles

function HouseCard({ houses }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function handleClick() {
        console.log("Booking clicked!");
    }

    // Function to handle image slideshow
    const nextImage = (images) => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="house-container">
            {houses.map(house => (
                <div className="card" key={house.name}>
                    <div className="slideshow">
                        <img
                            alt={house.name}
                            src={house.images[currentImageIndex]}
                            onClick={() => nextImage(house.images)}
                            className="house-image"
                        />
                    </div>
                    <h2>{house.name}</h2>
                    <p>{house.description}</p>
                    <button onClick={handleClick}>Book</button>
                </div>
            ))}
        </div>
    );
}

export default HouseCard;

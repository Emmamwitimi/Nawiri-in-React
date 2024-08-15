import React from "react";

function HouseCard({ houses }) {
    return (
        <div>
            {houses.map(house => (
                <div className="card" key={house.name}>
                    <div className="slideshow">
                        <img alt={house.name} src={house.image} />
                    </div>
                    <h2>{house.name}</h2>
                    <p>{house.description}</p>
                    <button>Book</button>
                </div>
            ))}
        </div>
    );
}

export default HouseCard;

// PopularDestinations.jsx
import React from "react";
import "./PopularDestinations.css";

const destinations = [
  { name: "Goa", image: "/images/goa.jpg" },
  { name: "Manali", image: "/images/manali.jpg" },
  { name: "Kerala", image: "/images/kerala.jpg" },
  { name: "Shimla", image: "/images/shimla.jpg" },
  { name: "Rajasthan", image: "/images/rajasthan.jpg" },
  { name: "Andaman", image: "/images/andaman.jpg" },
];

export default function PopularDestinations() {
  return (
    <section className="destinations-section">
      <h2 className="section-title">Popular Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div key={dest.name} className="destination-card">
            <img src={dest.image} alt={dest.name} />
            <div className="destination-name">{dest.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

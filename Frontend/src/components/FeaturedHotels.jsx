import React from "react";
import "./FeaturedHotels.css";

export default function FeaturedHotels() {
  const hotels = [
    {
      name: "The Grand Palace",
      location: "Mumbai, India",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sea View Resort",
      location: "Goa, India",
      image:
        "https://images.unsplash.com/photo-1501117716985-c8e1ecb210e2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mountain Bliss Hotel",
      location: "Manali, India",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // 📍 Scroll to Booking Form
  const handleBookNow = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="featured-section" id="hotels">
      <h2 className="featured-title">Featured Hotels</h2>
      <p className="featured-subtitle">
        Handpicked destinations curated just for you.
      </p>

      <div className="hotel-grid">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <button onClick={handleBookNow}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

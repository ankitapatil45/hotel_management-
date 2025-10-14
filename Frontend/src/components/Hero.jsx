import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="overlay">
        <div className="hero-content">
          <h1>Find Your Perfect Stay</h1>
          <p>Book the best hotels at affordable prices – anytime, anywhere.</p>
          <div className="hero-buttons">
            <button className="primary-btn">Explore Hotels</button>
            <button className="secondary-btn">Learn More</button>
          </div>

        </div>
        <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-badge">The Ultimate Hotel Experience</span>

        <h1 className="hero-title">
          Discover Your Perfect <br /> Gateway Destination
        </h1>

        <p className="hero-subtitle">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>

        <div className="search-bar">
          <input type="text" placeholder="Destination" />
          <input type="date" />
          <input type="date" />
          <input type="number" placeholder="Guests" />
          <button>Search</button>
        </div>
      </div>
    </section>

      </div>
    </section>
  );
}

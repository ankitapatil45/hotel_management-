import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left side - Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
            alt="About QuickStay"
          />
        </div>

        {/* Right side - Text */}
        <div className="about-content">
          <h2>About QuickStay</h2>
          <p>
            At <strong>QuickStay</strong>, we believe that travel should be
            effortless, luxurious, and memorable. Whether you're looking for a
            beachside retreat, a mountain escape, or a city adventure, we bring
            you the world’s finest stays at your fingertips.
          </p>
          <p>
            With our seamless booking experience, exclusive offers, and
            dedicated support team, we make sure every journey you take is as
            smooth as it is unforgettable.
          </p>
          <button
            onClick={() => {
              const bookingSection = document.getElementById("booking");
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  );
}

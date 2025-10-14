import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🌟",
      title: "Luxury Stay",
      desc: "Experience unmatched comfort with premium amenities and world-class hospitality.",
    },
    {
      icon: "💰",
      title: "Best Prices",
      desc: "We guarantee the best deals on top-rated hotels across the world.",
    },
    {
      icon: "⚡",
      title: "Easy Booking",
      desc: "Book your dream stay in just a few clicks with our seamless booking process.",
    },
  ];

  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose Us</h2>
      <p className="why-subtitle">
        Discover what makes QuickStay your best travel partner.
      </p>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

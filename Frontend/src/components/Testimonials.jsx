import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Riya Sharma",
      location: "Pune, India",
      review:
        "QuickStay made our vacation truly magical! The booking was seamless and the hotel was beyond expectations.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Arjun Patel",
      location: "Delhi, India",
      review:
        "I loved how easy it was to compare hotels and get the best price. Definitely using QuickStay again!",
      rating: 4,
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Sneha Desai",
      location: "Goa, India",
      review:
        "Excellent service and fantastic offers! Highly recommend to anyone planning their next trip.",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Guests Say</h2>
      <p className="testimonials-subtitle">
        Hear from our happy travelers around the world 🌎
      </p>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <h3>{t.name}</h3>
            <p className="testimonial-location">{t.location}</p>
            <p className="testimonial-review">“{t.review}”</p>
            <div className="testimonial-stars">
              {"⭐".repeat(t.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

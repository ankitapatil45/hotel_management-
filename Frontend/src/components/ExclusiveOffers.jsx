import React from "react";
import "./ExclusiveOffers.css";

export default function ExclusiveOffers() {
  const offers = [
    {
      title: "Summer Special - 30% OFF",
      desc: "Enjoy luxury stays this summer at exclusive discounted rates.",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Romantic Getaway",
      desc: "Book a couple package and get complimentary spa services.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Adventure Escapes",
      desc: "Thrilling destinations for those who seek adventure and excitement.",
      img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // 📍 Scroll to Booking Form on button click
  const handleBookNow = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="offers-section" id="offers">
      <h2 className="offers-title">Exclusive Offers</h2>
      <p className="offers-subtitle">Grab the best deals before they’re gone!</p>

      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.img} alt={offer.title} />
            <div className="offer-info">
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <button onClick={handleBookNow}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

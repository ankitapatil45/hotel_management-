import React, { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: "Standard",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        guests: formData.guests,
        room_type: formData.roomType,
      };

      await axios.post(
        "http://localhost:8000/api/save-booking/",
        bookingData,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Booking confirmed!");
    } catch (err) {
      console.error("Booking save error:", err);
      alert("Booking failed. Please contact support.");
    }
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">
        <h2>Book Your Stay</h2>
        <p>Fill in your details to reserve a perfect stay with QuickStay ✨</p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label>Check-In</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
          <label>Check-Out</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
          <label>Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
          />
          <label>Room Type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Room Type --</option> {/* 👈 Add this line */}
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>

          <button type="submit" className="book-btn">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
}

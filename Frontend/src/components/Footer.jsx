import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Brand Section --- */}
        <div className="footer-brand">
          <h2>🏠 QuickStay</h2>
          <p>
            Your trusted travel companion for luxury hotels, easy bookings, and
            exclusive offers worldwide.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#hotels">Hotels</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        {/* --- Contact --- */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@quickstay.com</p>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
      </div>
    </footer>
  );
}

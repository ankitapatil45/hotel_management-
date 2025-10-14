import React from "react";
import "./Navbar.css"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">🏠</span>
        <span className="logo-text">Stay Hotel</span>
      </div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#hotels">Hotels</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/login">Login</a></li>
      </ul>

      
    </nav>
  );
}

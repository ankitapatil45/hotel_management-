import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Stay Updated!</h2>
        <p>
          Subscribe to our newsletter and get exclusive travel deals and updates
          straight to your inbox ✈️
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-box brand">
          <h2>☕ FoodiePlace</h2>
          <p>
            Serving freshly brewed coffee with love, warmth, and passion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>📍 MG Road, Bengaluru</p>
          <p>📧 foodiemail@gmail.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

        {/* Social */}
        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
            <a href="#">📺</a>
          </div>

          <p className="footer-note">
            Stay connected for daily coffee stories ☕
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 FoodiePlace Café. All rights reserved.</p>

        <div className="legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
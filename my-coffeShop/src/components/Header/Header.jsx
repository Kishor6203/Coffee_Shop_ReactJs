import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="header">

        {/* Logo */}
        <div className="logo">☕ FoodiePlace</div>

        {/* Navigation Links */}
        <nav className={`nav ${isOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#location" onClick={closeMenu}>Location</a>

          {/* Mobile-only buttons (inside drawer) */}
          <div className="mobile-actions">
            <button className="cta-btn">Reserve Table</button>
            <button className="order-btn">Order Online</button>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="desktop-actions">
          <button className="order-btn">Order Online</button>
          <button className="cta-btn">Reserve Table</button>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default Header;
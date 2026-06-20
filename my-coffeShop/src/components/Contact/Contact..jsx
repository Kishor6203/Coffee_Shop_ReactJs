import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation request sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span className="tag">Table Reservation</span>
        <h2>Book Your Coffee Experience</h2>
        <p>Reserve your table and enjoy freshly brewed moments ☕</p>
      </div>

      <div className="contact-container">

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Make a Reservation</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Date, Time, Guests..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>

          <p className="form-note">
            We respond within <strong>10–15 minutes</strong> during working hours.
          </p>
        </form>

        {/* INFO CARD */}
        <div className="contact-info">
          <h3>Visit Us</h3>

          <p className="address">
            📍 FoodiePlace Café, MG Road, Bengaluru
          </p>

          <p className="phone">📞 +91 98765 43210</p>

          <div className="actions">
            <a
              className="whatsapp-btn"
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp Us
            </a>

            <button className="quick-book">
              Instant Table Booking
            </button>
          </div>

          <div className="badge">
            ⚡ Open: 8 AM – 11 PM
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
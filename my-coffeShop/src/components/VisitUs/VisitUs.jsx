import React from "react";
import "./VisitUs.css";

const Visit = () => {
  return (
    <section className="location" id="visit">

      <div className="location-header">
        <h2>Visit Us</h2>
        <p>Come experience freshly brewed coffee in a cozy atmosphere ☕</p>
      </div>

      <div className="location-container">

        {/* SINGLE PREMIUM CARD */}
        <div className="location-card">

          <div className="location-block">
            <h3>📍 Address</h3>
            <p>
              FoodiePlace Café, MG Road, Bengaluru, Karnataka, India
            </p>
          </div>

          <div className="location-block">
            <h3>🕒 Opening Hours</h3>
            <p>
              Monday – Sunday: 8:00 AM – 10:00 PM <br />
              Public Holidays: 9:00 AM – 9:00 PM
            </p>
          </div>

          <div className="location-block">
            <h3>🚗 Parking & Contact</h3>
            <p>
              Free two-wheeler parking available <br />
              📞 +91 98765 43210
            </p>
          </div>

          <button className="visit-btn">
            Get Directions
          </button>

        </div>

        {/* MAP */}
        <div className="location-map">
          <iframe
            title="cafe-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </section>
  );
};

export default Visit;
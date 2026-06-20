import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img
            src="https://media.istockphoto.com/id/539459864/photo/woman-writing-her-notebook.jpg?s=612x612&w=0&k=20&c=AckgRcKHozRiIV-Qwg9Tq-vjxPG0pRj9RiyNBmbIUeM="
            alt="coffee shop"
          />
        </div>

        {/* Content */}
        <div className="about-content">
          <span className="section-tag">Our Story</span>

          <h2>
            Crafting Coffee, <br /> Creating Memories
          </h2>

          <p className="lead">
            At <strong>FoodiePlace Café</strong>, coffee is not just a drink —
            it’s an experience crafted with passion, precision, and warmth.
          </p>

          <p>
            We started as a small corner café with a simple dream:
            to serve freshly brewed coffee made from ethically sourced,
            organic beans while creating a cozy space for everyone.
          </p>

          <h3>What Makes Us Unique</h3>

          <div className="features">
            <div className="feature">☕ Organic beans</div>
            <div className="feature">🔥 Handcrafted brewing</div>
            <div className="feature">🪵 Cozy ambience</div>
            <div className="feature">🥐 Fresh pastries</div>
          </div>

          <p>
            Today, we continue to grow — but our mission remains the same:
            serve coffee that feels like home.
          </p>

          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
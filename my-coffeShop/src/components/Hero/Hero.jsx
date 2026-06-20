import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <span className="tagline">Premium Coffee Experience</span>

        <h1>
          Brewed with Passion, <br />
          Served with Love
        </h1>

        <p>
          Discover hand-crafted coffee made from ethically sourced beans,
          roasted fresh daily to deliver rich aroma and unforgettable taste.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore Menu</button>
          <button className="secondary-btn">Visit Us</button>
        </div>

        <div className="stats">
          <div>
            <h3>20+</h3>
            <p>Varieties</p>
          </div>
          <div>
            <h3>5★</h3>
            <p>Rated Café</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Fresh Beans</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
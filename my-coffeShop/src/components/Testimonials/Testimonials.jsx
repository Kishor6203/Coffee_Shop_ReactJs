import React from "react";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    rating: 5,
    text: "Best cappuccino in town! The aroma and taste are unmatched.",
  },
  {
    id: 2,
    name: "Priya Verma",
    rating: 4,
    text: "Cozy ambience and amazing cold brew. Perfect place to work.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    rating: 5,
    text: "Their espresso is pure perfection. Highly recommended!",
  },
  {
    id: 4,
    name: "Sneha Iyer",
    rating: 5,
    text: "Love the vibe here. Friendly staff and great coffee every time.",
  },
];

const renderStars = (rating) => "⭐".repeat(rating);

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonials-header">
        <h2>What Our Customers Say</h2>
        <p>Real experiences from coffee lovers ☕</p>
      </div>

      <div className="rating-summary">
        <h3>⭐ 4.8 / 5</h3>
        <p>Trusted by 1,200+ happy customers</p>
      </div>

      <div className="review-grid">
        {reviews.map((item) => (
          <div className="review-card" key={item.id}>
            <div className="stars">{renderStars(item.rating)}</div>
            <p className="review-text">"{item.text}"</p>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;
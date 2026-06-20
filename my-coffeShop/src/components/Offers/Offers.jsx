import React from "react";
import "./Offers.css";

const offers = [
  {
    id: 1,
    title: "Happy Hours",
    desc: "Get 20% OFF on all coffees between 2 PM – 5 PM.",
    highlight: "2 PM - 5 PM",
  },
  {
    id: 2,
    title: "Weekend Combo",
    desc: "Buy 2 coffees + 1 pastry at a special discounted price.",
    highlight: "Best Seller",
  },
  {
    id: 3,
    title: "Student Discount",
    desc: "Show your student ID and get 15% OFF on all orders.",
    highlight: "15% OFF",
  },
  {
    id: 4,
    title: "Breakfast Deal",
    desc: "Coffee + Croissant combo starting at just ₹199.",
    highlight: "₹199 Only",
  },
];

const Offers = () => {
  return (
    <section className="offers" id="offers">

      <div className="offers-header">
        <h2>Special Offers</h2>
        <p>Limited-time deals crafted to make your coffee moments better ☕</p>
      </div>

      <div className="offers-grid">
        {offers.map((item) => (
          <div className="offer-card" key={item.id}>

            <div className="offer-badge">
              {item.highlight}
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button className="offer-btn">
              Grab This Deal
            </button>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Offers;
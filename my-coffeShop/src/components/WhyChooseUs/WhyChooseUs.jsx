import React from "react";
import "./WhyChooseUs.css";

const features = [
  {
    id: 1,
    title: "Specialty Coffee Craftsmanship",
    desc: "Every cup is expertly crafted by skilled baristas, ensuring exceptional flavor, consistency, and quality.",
    icon: "☕",
  },
  {
    id: 2,
    title: "Premium Ethically Sourced Beans",
    desc: "We carefully select specialty-grade beans from trusted farms committed to sustainable and ethical practices.",
    icon: "🌱",
  },
  {
    id: 3,
    title: "Freshly Roasted Excellence",
    desc: "Our beans are roasted in small batches to preserve their natural aroma, freshness, and unique character.",
    icon: "🔥",
  },
  {
    id: 4,
    title: "Curated Café Experience",
    desc: "Designed with comfort and elegance in mind, our space offers the perfect atmosphere for work, conversations, and relaxation.",
    icon: "✨",
  },
  {
    id: 5,
    title: "Warm Hospitality",
    desc: "We believe great coffee deserves great service, creating memorable experiences for every guest who walks through our doors.",
    icon: "🤝",
  },
  {
    id: 6,
    title: "Commitment to Sustainability",
    desc: "From responsible sourcing to eco-friendly practices, we strive to make every cup meaningful for people and the planet.",
    icon: "🌍",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why" id="why">
      <div className="why-container">
        <div className="why-header">
          <span className="why-subtitle">PREMIUM COFFEE EXPERIENCE</span>

          <h2>Why Coffee Lovers Choose Us</h2>

          <p>
            Experience specialty coffee, exceptional hospitality, and a café
            atmosphere thoughtfully crafted to make every visit memorable.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item) => (
            <div className="why-card" key={item.id}>
              <div className="icon-wrapper">
                <span className="icon">{item.icon}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from "react";
import "./Gallery.css";

const images = [
  { id: 1, url: "https://www.bbassets.com/media/uploads/p/xxl/40337920_2-starbucks-coffee-latte-tall.jpg", title: "Cozy Interior" },
  { id: 2, url: "https://guentercoffee.com/cdn/shop/articles/anleitung-cappuccino-blogheader_749c310f-0dc4-4a54-8fdc-351bd3b33cd6.jpg?v=1778077512&width=1200", title: "Fresh Coffee" },
  { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Fjsm2iwucf5EFHGGsi_8WHZ90NjFsqGGAZ1RlI3GoKrwWZR40YwfBUj3&s=10", title: "Barista Craft" },
  { id: 4, url: "https://athome.starbucks.com/sites/default/files/styles/recipe_banner_xlarge/public/2024-05/CreamySaltedCaramelColdBrew_RecipeHeader_848x539_%402x.jpg.webp?h=45cde313&itok=4-brPJG-", title: "Warm Seating" },
  { id: 5, url: "https://hoxtoncoffee.com/cdn/shop/articles/latte-art-on-mocha_1200x1200.jpg?v=1660069726", title: "Happy Customers" },
  { id: 6, url: "https://www.foodandwine.com/thmb/xQZv2CX6FO5331PYK7uGPF1we9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Flat-White-FT-BLOG0523-b11f6273c2d84462954c2163d6a1076d.jpg", title: "Coffee Moments" },
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <h2>Our Atmosphere</h2>
        <p>A glimpse of warmth, coffee, and crafted experiences ☕</p>
      </div>

      <div className="gallery-grid">
        {images.map((item) => (
          <div className="gallery-item" key={item.id}>
            <img src={item.url} alt={item.title} />
            <div className="overlay">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
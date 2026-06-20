import React from "react";
import "./Menu.css";

const menuItems = [
  {
    id: 1,
    name: "Caffè Latte",
    price: "₹180",
    desc: "Smooth espresso with steamed milk and light foam.",
    img: "https://www.bbassets.com/media/uploads/p/xxl/40337920_2-starbucks-coffee-latte-tall.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "₹160",
    desc: "Rich espresso with frothy milk foam and cocoa dusting.",
    img: "https://guentercoffee.com/cdn/shop/articles/anleitung-cappuccino-blogheader_749c310f-0dc4-4a54-8fdc-351bd3b33cd6.jpg?v=1778077512&width=1200",
  },
  {
    id: 3,
    name: "Espresso",
    price: "₹120",
    desc: "Strong, bold shot of pure coffee essence.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Fjsm2iwucf5EFHGGsi_8WHZ90NjFsqGGAZ1RlI3GoKrwWZR40YwfBUj3&s=10",
  },
  {
    id: 4,
    name: "Cold Brew",
    price: "₹200",
    desc: "Slow-steeped coffee served chilled for a smooth taste.",
    img: "https://athome.starbucks.com/sites/default/files/styles/recipe_banner_xlarge/public/2024-05/CreamySaltedCaramelColdBrew_RecipeHeader_848x539_%402x.jpg.webp?h=45cde313&itok=4-brPJG-",
  },
  {
    id: 5,
    name: "Mocha",
    price: "₹190",
    desc: "Perfect blend of coffee, chocolate, and milk.",
    img: "https://hoxtoncoffee.com/cdn/shop/articles/latte-art-on-mocha_1200x1200.jpg?v=1660069726",
  },
  {
    id: 6,
    name: "Flat White",
    price: "₹170",
    desc: "Velvety microfoam with a strong espresso base.",
    img: "https://www.foodandwine.com/thmb/xQZv2CX6FO5331PYK7uGPF1we9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Flat-White-FT-BLOG0523-b11f6273c2d84462954c2163d6a1076d.jpg",
  },
];

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h2>Featured Menu</h2>
      <p className="subtitle">Our best-selling coffee favorites</p>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.img} alt={item.name} />

            <div className="menu-info">
              <div className="menu-header">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>

              <p>{item.desc}</p>

              <button className="order-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className="menu-footer">
        <button className="view-menu-btn">View Full Menu</button>
      </div>
    </section>
  );
};

export default Menu;
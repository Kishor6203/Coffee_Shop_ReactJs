import React from "react";
import "./Chef.css";

const Chef = () => {
  return (
    <section className="chef" id="chef">

      <div className="chef-header">
        <h2>Meet Our Chef</h2>
        <p>The passion behind every cup and every bite ☕</p>
      </div>

      <div className="chef-container">

        {/* IMAGE SIDE */}
        <div className="chef-image">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20250408/pngtree-a-happy-businessman-is-sitting-in-cafe-drinking-coffee-and-watching-image_17164561.jpg"
            alt="Chef"
          />
        </div>

        {/* CONTENT SIDE */}
        <div className="chef-content">

          <h3>Chef Arjun Menon</h3>

          <p>
            With over 12 years of experience in specialty coffee and café cuisine,
            Chef Arjun brings a perfect blend of tradition and innovation to every cup.
          </p>

          <p>
            He believes that great coffee is not just brewed — it is crafted with patience,
            precision, and passion.
          </p>

          <div className="chef-stats">

            <div className="stat">
              <h4>12+</h4>
              <p>Years Experience</p>
            </div>

            <div className="stat">
              <h4>50K+</h4>
              <p>Cups Crafted</p>
            </div>

            <div className="stat">
              <h4>4.9⭐</h4>
              <p>Customer Rating</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Chef;
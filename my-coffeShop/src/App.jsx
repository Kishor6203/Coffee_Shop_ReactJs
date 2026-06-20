import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Chef from "./components/Chef/Chef";
import Menu from "./components/Menu/Menu";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact.";
import Offers from "./components/Offers/Offers";
import Footer from "./components/Footer/Footer";
import VisitUs from "./components/VisitUs/VisitUs";

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Menu/>
      <Offers/>
      <WhyChooseUs/>
      <Chef/>
      <Gallery/>
      <VisitUs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    
    <section className="hero">
      <div className="hero-content">
        <h1>THE WORLD'S LARGEST SPATIAL DESIGN LIBRARY</h1>
        <p>
          Save hours of UI & UX research with our library of<br /> 300,000+ screens
          from the world's best designed apps.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">SIGN UP</button>
          <button className="btn btn-secondary">LOG IN</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

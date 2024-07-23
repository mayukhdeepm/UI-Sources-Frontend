import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "./CategoriesSection.css";
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom"; // Import Link from React Router

const categories = [
  { name: "Games", apps: 50, image: "https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291" },
  { name: "Entertainment", apps: 10, image: "https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291" },
  { name: "Design", apps: 21, image: "https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291" },
  { name: "Lifestyle", apps: 10, image: "https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291" },
  { name: "Games", apps: 50, image: "https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291" },
  { name: "Entertainment", apps: 10, image: "https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291" },
  { name: "Design", apps: 21, image: "https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291" },
  { name: "Lifestyle", apps: 10, image: "https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291" },
  // Add more categories as needed
];

const CategoriesSection = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = slider.offsetWidth;
    if (direction === "left") {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="categories-section-container">
      <div className="categories-section-header">
        <h2>Categories</h2>
        <button onClick={() => navigate('/category')} className="view-all-btn">
          All Categories
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="categories-slider-wrapper">
        <button className="slider-arrow left" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>
        <div className="categories-slider" ref={sliderRef}>
          {categories.map((category, index) => (
            <div onClick={() => navigate('/filters')} key={index} className="category-card">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.apps} APPS</p>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-arrow right" onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </button>
        <div className="gradient-overlay left"></div>
        <div className="gradient-overlay right"></div>
      </div>
    </div>
  );
};

export default CategoriesSection;
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "./AppSlider.css";

const apps = [
  {
    name: "Active Arcade",
    cname: "Arcade",
    category: "SOCIAL",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpZ6vOt1JZncYg03voBCpXK7HNL6q9hIiiQ&s",
  },
  {
    name: "SolAR-Solar",
    cname: "Arcade",
    category: "EDUCATION",
    image: "https://science.nasa.gov/wp-content/uploads/2023/06/pia11800-our-solar-system-features-eight-planets-16x9-1.jpg?w=4096&format=jpeg",
  },
  {
    name: "Monster Park",
    cname: "Arcade",
    category: "GAME",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dz1dRCDmj_UXmRn1WabnljBRluTLj2b3xQ&s",
  },
  {
    name: "Assemblr",
    cname: "Arcade",
    category: "SOCIAL",
    image: "https://play-lh.googleusercontent.com/r7itbjMy9ySKg8BpgReqTC6njaVluKLJ29lFy2hnr0HoYTscTwstJdqqSoTlXu5s7J8",
  },
  { name: "Pokemon GO", cname: "Arcade", category: "GAME", image: "https://yt3.googleusercontent.com/ytc/AIdro_lMvC21pmuKnN9iC4E3Du7VgxD0EyqyWxfVyTHZXEvywso=s900-c-k-c0x00ffffff-no-rj" },
  {
    name: "AR Dragon",
    cname: "Arcade",
    category: "SOCIAL",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_lMvC21pmuKnN9iC4E3Du7VgxD0EyqyWxfVyTHZXEvywso=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Polycam 3D",
    cname: "Arcade",
    category: "UTILITIES",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_lMvC21pmuKnN9iC4E3Du7VgxD0EyqyWxfVyTHZXEvywso=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Angry Birds",
    cname: "Arcade",
    category: "GAME",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_lMvC21pmuKnN9iC4E3Du7VgxD0EyqyWxfVyTHZXEvywso=s900-c-k-c0x00ffffff-no-rj",
  },
];

const AppSlider = () => {
  const sliderRef = useRef(null);

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
    <div className="app-slider-container">
      <div className="app-slider-header">
        <h2>Top Rated Apps</h2>
        <button className="view-all-btn">
          All Apps
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="app-slider-wrapper">
        <button className="slider-arrow left" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>
        <div className="app-slider" ref={sliderRef}>
          {apps.map((app, index) => (
            <div key={index} className="app-card">
              <img
                src={app.image}
                alt={app.name}
                className="app-image"
              />
              <div className="app-info1">
                <h3>{app.name}</h3>
                <h6>By {app.cname}</h6>
                <p>{app.category}</p>
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

export default AppSlider;
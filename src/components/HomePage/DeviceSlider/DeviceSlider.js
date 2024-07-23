import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "./DeviceSlider.css";

const devices = [
  { name: "Mobile AR", apps: 450 },
  { name: "Web AR", apps: 120 },
  { name: "Vision Pro", apps: 596 },
  { name: "Meta Quest", apps: 1224 },
  { name: "Sony PlayStation VR2", apps: 262 },
  { name: "HTC Vive", apps: 180 },
  // Add more devices as needed
];

const DeviceSlider = () => {
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
    <div className="device-slider-container">
      <div className="device-slider-header">
        <h2>
          Devices
          <span className="coming-soon">COMING SOON</span>
        </h2>
        <button className="view-all-btn1">
          All Devices
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="device-slider-wrapper">
        <button className="slider-arrow left" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>
        <div className="device-slider" ref={sliderRef}>
          {devices.map((device, index) => (
            <div key={index} className="device-card">
              <div className="device-image-placeholder"></div>
              <h3>{device.name}</h3>
              <p>{device.apps} APPS</p>
            </div>
          ))}
        </div>
        <button className="slider-arrow right" onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default DeviceSlider;

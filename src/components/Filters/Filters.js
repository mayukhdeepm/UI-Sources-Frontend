import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import './Filters.css';
import { useNavigate } from 'react-router-dom';

const HeaderBanner = () => {
  return (
    <div className="custom-header-banner">
      <div className="banner-text">
        <h1>GAMES</h1>
        <p>50 Game application interfaces for designers</p>
      </div>
    </div>
  );
};

const apps = [
  { video: "https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/2795405-hd_720_1280_25fps.mp4" },
  { image: "https://play-lh.googleusercontent.com/gFj-QxrmiI8u2O-BTwyeUHqbqLaaMZjU66LU1W4PpWz2n4U1ZiV9gxv0O7HoO23jH-PZ=w526-h296-rw" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbnB13x3c8MluyV_FBZPB9tHw3ri6Kr683hAWLtfO2wDnUq0sOXkPP1O5vBb3-7RafEiA&usqp=CAU" },
  { image: "https://www.researchgate.net/publication/317865821/figure/fig1/AS:508922291122176@1498347937532/Screenshots-of-the-Pokemon-GO-game.png" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOW5Xn54j1X4yRjsn1QtUbZlbmO6yzH3Z2D8Ka10WhRw7ewx9yzzTXBDcueuEFLEGtBQE&usqp=CAU" },
  { image: "https://yt3.googleusercontent.com/ytc/AIdro_lMvC21pmuKnN9iC4E3Du7VgxD0EyqyWxfVyTHZXEvywso=s900-c-k-c0x00ffffff-no-rj" },
  { image: "https://yt3.googleusercontent.com/ytc/AIdro_lMvC21pmuKnN9iC4E3Du7VgxD0EyqyWxfVyTHZXEvywso=s900-c-k-c0x00ffffff-no-rj" },
  { image: "https://yt3.googleusercontent.com/ytc/AIdro_lMvC21pmuKnN9iC4E3Du7VgxD0EyqyWxfVyTHZXEvywso=s900-c-k-c0x00ffffff-no-rj" },
  { image: "https://yt3.googleusercontent.com/ytc/AIdro_lMvC21pmuKnN9iC4E3Du7VgxD0EyqyWxfVyTHZXEvywso=s900-c-k-c0x00ffffff-no-rj" },
];

const ImageSlider = ({ title, screens }) => {
  const navigate = useNavigate();
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
    <div className="custom-app-slider-container">
      <div className="custom-app-slider-header">
        <h2>{title}<br /><span>{screens}</span></h2>
        <button className="custom-view-all-btn" onClick={() => navigate('/app-page')}>
          VIEW ALL
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="custom-app-slider-wrapper">
        <button className="custom-slider-arrow left" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>
        <div className="custom-app-slider" ref={sliderRef}>
          {apps.map((app, index) => (
            <div key={index} className="custom-app-card">
              {app.video ? (
                <video className="custom-app-video" autoPlay muted loop>
                  <source src={app.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={app.image}
                  alt={app.name || "App Image"}
                  className="custom-app-image"
                />
              )}
            </div>
          ))}
        </div>
        <button className="custom-slider-arrow right" onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const LeftComponent = () => {
  return (
    <div className="left-component">
      <img
        src="https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Filters.png?v=1721156529193"
        alt="Left Component Image"
        className="left-image"
      />
    </div>
  );
};

const Filters = () => {
  return (
    <div>
      <HeaderBanner />
      <div className="grid-container">
        <div className="left-column">
          <LeftComponent />
        </div>
        <div className="right-column">
          <ImageSlider title="The Lord of the Rings" screens="(20 screens)"/>
          <ImageSlider title="Pokemon Go" screens="(20 screens)" />
          <ImageSlider title="Among Us" screens="(20 screens)" />
          <ImageSlider title="Polycam 3D" screens="(20 screens)" />
          
        </div>
      </div>
    </div>
  );
};

export default Filters;

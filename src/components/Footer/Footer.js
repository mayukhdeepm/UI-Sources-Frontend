import React from 'react';
import { Twitter, Twitch } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Explore a collection of design interfaces<br />
          and find inspiration for your next spatial app.
        </p>
        <div className="footer-buttons">
          <button className="footer-button">AR</button>
          <button className="footer-button">VR</button>
          <button className="footer-button">MR</button>
          <button className="footer-button">CV</button>
          <button className="footer-button icon-button">
            <Twitter size={20} />
          </button>
          <button className="footer-button icon-button">
            <Twitch size={20} />
          </button>
        </div>
      </div>
      <div className="footer-links">
        <a href="#" className="footer-link">Cookie policy</a>
        <a href="#" className="footer-link">Copyright complaints</a>
        <a href="#" className="footer-link">Privacy policy</a>
        <a href="#" className="footer-link">Terms and conditions</a>
      </div>
      <p className="footer-copyright">
        Applications, games, pictures, all trademarks, and registered trademarks are the property of their respective owners.
      </p>
      <p className="footer-copyright">
        © 2024 UX Sources
      </p>
    </footer>
  );
};

export default Footer;
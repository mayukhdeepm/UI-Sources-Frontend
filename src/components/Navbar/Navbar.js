import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <span className="logo">XO</span>
        </div>
        <div className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
          <NavItem text="GAMES" />
          <NavItem text="UTILITIES" />
          <NavItem text="ENTERTAINMENT" />
          <NavItem text="DESIGN" />
          <NavItem text="SOCIAL" />
          <NavItem text="EDUCATION" />
          <NavItem text="LIFESTYLE" />
          <NavItem text="SHOPPING" />
          <NavItem text="BUSINESS" />
          <NavItem text="GIFTS" />
        </div>
        <div className="navbar-right">
          <button className="login-btn">LOG IN</button>
          <button className="signup-btn">SIGN UP</button>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ text }) => (
  <a href="#" className="nav-item">
    {text}
  </a>
);

export default Navbar;

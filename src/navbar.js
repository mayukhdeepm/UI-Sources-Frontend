import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black text-white p-4">
      <div className="flex items-center space-x-4">
        <Menu className="text-white" size={24} />
        <span className="font-bold text-xl">XO</span>
      </div>
      <div className="hidden md:flex space-x-6">
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
      <div className="flex items-center space-x-4">
        <button className="text-sm">LOG IN</button>
        <button className="bg-white text-black px-4 py-2 rounded text-sm font-semibold">
          SIGN UP
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ text }) => (
  <a href="#" className="text-sm hover:text-gray-300">
    {text}
  </a>
);

export default Navbar;

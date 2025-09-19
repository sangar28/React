import React from "react";
import { FiCoffee } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <p>
            <FiCoffee />
          </p>
          <p className="font">Cafe</p>
        </div>
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">About-Us</a></li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;

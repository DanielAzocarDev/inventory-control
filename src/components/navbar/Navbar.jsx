import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/">
          <h1>Brand</h1>
        </Link>
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

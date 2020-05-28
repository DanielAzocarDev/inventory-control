import React from "react";
import { Link } from "react-router-dom";

import SignIn from "./SignIn";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <Link to="/">
          <h1>Daniel's App</h1>
        </Link>
        <SignIn />
      </div>
    </nav>
  );
};

export default Navbar;

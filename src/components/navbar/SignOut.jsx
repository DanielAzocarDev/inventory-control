import React from "react";
import { NavLink } from "react-router-dom";

const SignOut = () => {
  return (
    <ul>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/">Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignOut;

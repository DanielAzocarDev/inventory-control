import React from "react";
import "./Login.scss";

const LogIn = () => {
  return (
    <form className="login-form">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="user-psw">Password</label>
      <input type="password" id="user-psw" />
      <button>Log In</button>
    </form>
  );
};

export default LogIn;

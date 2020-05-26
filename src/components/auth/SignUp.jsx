import React from "react";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <form className="signup-form">
      <label htmlFor="signupname">Name</label>
      <input type="text" id="signupname" />
      <label htmlFor="signupemail">Email</label>
      <input type="email" id="signupemail" />
      <label htmlFor="signupuser">Username</label>
      <input type="text" id="signupuser" />
      <label htmlFor="signuppsw">Password</label>
      <input type="password" id="signuppsw" />
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;

import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <h2>About this App</h2>
      <p>
        This app is a basic inventory system based on React, React Router,
        Context API, localStorage and SASS. You can create, read, update and
        delete the items that you create through the form. While making this app
        I learn how to setup and manage a centralized state with Context API and
        it communicated with all the app's components. I hope you like it, stay
        tuned for upcoming updates that come with new features!
      </p>
      <h3>Technologies</h3>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Context API</li>
        <li>UUID</li>
        <li>localStorage</li>
        <li>SASS</li>
      </ul>
    </div>
  );
};

export default About;

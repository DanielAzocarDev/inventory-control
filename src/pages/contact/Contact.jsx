import React from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Let's meet up!</h2>
      <p>
        My name is Daniel Azocar, I am a frontend developer. I like to create
        software solutions for everyday problems. I think React is a great
        working tool but I'm not limited to it and I'm always exploring new
        ones!
      </p>
      <h3>My Profiles</h3>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/danielazocardev/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/DanielAzocarDev" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://twitter.com/DanielAzocarDev" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/danielazocar.dev/" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

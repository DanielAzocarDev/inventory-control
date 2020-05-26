import React from "react";

import "./TotalDisplay.scss";

const TotalDisplay = ({ title, numb, icon }) => {
  return (
    <div className="display">
      <div className="display-icon">
        <i className={icon}></i>
      </div>
      <div className="display-data">
        <h3 className="display-title">{title}</h3>
        <p className="display-numb">{numb}</p>
      </div>
    </div>
  );
};

export default TotalDisplay;

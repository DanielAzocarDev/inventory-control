import React from "react";

import "./TotalDisplay.scss";

const TotalDisplay = ({ title, numb }) => {
  return (
    <div className="display">
      <h3 className="display-title">{title}</h3>
      <p className="display-numb">{numb}</p>
    </div>
  );
};

export default TotalDisplay;

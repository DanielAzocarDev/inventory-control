import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import ItemState from "./context/item/ItemState";

ReactDOM.render(
  <ItemState>
    <App />
  </ItemState>,
  document.getElementById("root")
);

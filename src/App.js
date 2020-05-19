import React from "react";
import "./App.css";
import AddItem from "./components/additem/AddItem";
import Item from "./components/item/Item";

function App() {
  return (
    <div className="container">
      <div className="form-container">
        <AddItem />
      </div>
      <div className="item-list">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default App;

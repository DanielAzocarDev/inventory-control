import React from "react";
import "./App.css";
import AddItem from "./components/additem/AddItem";
import Item from "./components/item/Item";
import ItemList from "./components/itemlist/ItemList";

function App() {
  return (
    <div className="container">
      <div className="form-container">
        <AddItem />
      </div>
      <ItemList />
    </div>
  );
}

export default App;

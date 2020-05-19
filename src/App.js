import React from "react";
import "./App.css";
import AddItem from "./components/additem/AddItem";
import Item from "./components/item/Item";

function App() {
  return (
    <div className="App">
      <AddItem />
      <Item />
    </div>
  );
}

export default App;

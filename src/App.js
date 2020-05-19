import React, { useState } from "react";
import "./App.css";
import AddItem from "./components/additem/AddItem";
import ItemList from "./components/itemlist/ItemList";

function App() {
  // Global state del App
  const [items, setItems] = useState([]);

  // Agrega item del AddItem form al global state
  const addItem = (i) => {
    setItems([...items, i]);
    console.log(items);
  };
  return (
    <div className="container">
      <div className="form-container">
        <AddItem addItem={addItem} />
      </div>
      <ItemList items={items} />
    </div>
  );
}

export default App;

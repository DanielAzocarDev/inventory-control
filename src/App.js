import React, { useState } from "react";
import "./App.css";
import AddItem from "./components/additem/AddItem";
import ItemList from "./components/itemlist/ItemList";

function App() {
  const [items, setItems] = useState([]);

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

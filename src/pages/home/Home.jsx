import React, { useState } from "react";

import AddItem from "../../components/additem/AddItem";
import ItemList from "../../components/itemlist/ItemList";
import TotalDisplay from "../../components/totaldisplay/TotalDisplay";

const Home = () => {
  // Global state del App
  const [items, setItems] = useState([]);

  // Agrega item del AddItem form al global state
  const addItem = (i) => {
    setItems([...items, i]);
    console.log(items);
  };

  const unitsTotal = items.reduce(
    (totalUnits, items) => totalUnits + parseInt(items.units),
    0
  );

  const incomesTotal = items.reduce(
    (totalIncomes, items) => totalIncomes + parseInt(items.price),
    0
  );

  const costsTotal = items.reduce(
    (totalCosts, items) => totalCosts + parseInt(items.cost),
    0
  );

  return (
    <div className="container">
      <div className="form-container">
        <div className="display-container">
          <TotalDisplay title="income" numb={incomesTotal} />
          <TotalDisplay title="cost" numb={costsTotal} />
          <TotalDisplay title="units" numb={unitsTotal} />
        </div>
        <AddItem addItem={addItem} />
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default Home;

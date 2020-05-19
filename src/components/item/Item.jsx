import React from "react";
import "./Item.scss";

const Item = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.title}</h3>
      <div>
        <p>{item.price}</p>
        <p>{item.cost}</p>
        <p>{item.units}</p>
      </div>
      <div className="item-btns">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Item;

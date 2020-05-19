import React from "react";
import "./Item.scss";

const Item = () => {
  return (
    <div className="item">
      <h3>Title</h3>
      <div>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
      </div>
      <div className="item-btns">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Item;

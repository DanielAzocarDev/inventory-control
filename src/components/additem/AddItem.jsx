import React from "react";
import "./AddItem.scss";

const AddItem = () => {
  return (
    <form className="form">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />
      <label htmlFor="price">Price</label>
      <input type="number" id="price" />
      <label htmlFor="cost">Cost</label>
      <input type="number" id="cost" />
      <label htmlFor="units">Units</label>
      <input type="number" id="units" />
      <input type="button" value="Create!" />
    </form>
  );
};

export default AddItem;

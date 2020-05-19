import React from "react";
import Item from "../item/Item";
import "./ItemList.scss";

const ItemList = () => {
  return (
    <div className="item-list">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default ItemList;

import React from "react";
import Item from "../item/Item";
import "./ItemList.scss";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;

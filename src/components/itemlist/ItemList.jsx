import React, { useContext } from "react";
import Item from "../item/Item";
import ItemContext from "../../context/item/itemContext";
import "./ItemList.scss";

const ItemList = () => {
  const itemContext = useContext(ItemContext);
  const { items } = itemContext;

  return (
    <div className="item-list">
      {items.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;

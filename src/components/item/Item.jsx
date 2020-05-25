import React, { useContext } from "react";
import ItemContext from "../../context/item/itemContext";
import "./Item.scss";

const Item = ({ item }) => {
  const itemContext = useContext(ItemContext);

  const { deleteItem, setCurrent, clearCurrent } = itemContext;
  const { title, price, cost, units, id } = item;

  const onDelete = () => {
    deleteItem(id);
    clearCurrent();
  };

  return (
    <div className="item">
      <h3>{title}</h3>
      <div>
        <p>{price}</p>
        <p>{cost}</p>
        <p>{units}</p>
      </div>
      <div className="item-btns">
        <button onClick={onDelete}>Delete</button>
        <button
          onClick={() => {
            setCurrent(item);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Item;

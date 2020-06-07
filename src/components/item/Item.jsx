import React, { useContext } from "react";
import ItemContext from "../../context/item/itemContext";
import "./Item.scss";

const Item = ({ item }) => {
  const itemContext = useContext(ItemContext);

  const { deleteItem, sellItem, setCurrent, clearCurrent } = itemContext;
  const { title, price, cost, units, id } = item;

  const onDelete = () => {
    deleteItem(id);
    clearCurrent();
  };

  const onSell = () => {
    sellItem(item);
  };

  return (
    <div className="item">
      <h3>{title}</h3>
      <div className="data-container" onClick={onSell}>
        <div>
          <p>price</p>
          <p>cost</p>
          <p>units</p>
        </div>
        <div>
          <p>{price}</p>
          <p>{cost}</p>
          <p>{units}</p>
        </div>
      </div>
      <div className="item-btns">
        <button className="btn-delete" onClick={onDelete}>
          Delete
        </button>
        <button
          className="btn-edit"
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

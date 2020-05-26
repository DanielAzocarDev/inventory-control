import React, { useState, useContext, useEffect } from "react";
import ItemContext from "../../context/item/itemContext";
import "./AddItem.scss";

const AddItem = () => {
  // Inicializamos ItemContext dentro de itemContext
  const itemContext = useContext(ItemContext);
  const { addItem, updateItem, clearCurrent, current } = itemContext;

  // Tener cuidado no confundir [] con {}, los que se usan son []
  const [item, setItem] = useState({
    title: "",
    price: "",
    cost: "",
    units: "",
  });

  useEffect(() => {
    if (current !== null) {
      setItem(current);
    } else {
      setItem({
        title: "",
        price: "",
        cost: "",
        units: "",
      });
    }
  }, [itemContext, current]);

  // Funcion para manejas cambios en los inputs y guardarlos en el state(item)
  const handlerChange = (e) => {
    // Asigna el value de los input en el state. viene dentro de hook useState
    setItem({
      // Hacemos un spread para que al obtener el value y id de cada input pasemos al siguiente
      ...item,
      // Es para iterar y crear los keys y values del objeto en relacion al id y values de los inputs
      [e.target.id]: e.target.value,
    });
  };

  // maneja el submit del form
  const handlerSubmit = (e) => {
    // Evita el behavior default de form al hacer submit
    e.preventDefault();
    if (current === null) {
      // Function pasada como props que envia item al state global
      addItem(item);
    } else {
      updateItem(item);
    }

    // Restaura values de inputs a ""
    setItem({
      title: "",
      price: "",
      cost: "",
      units: "",
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <h3>{current ? "Edit Item" : "Add Item"}</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        onChange={handlerChange}
        value={item.title}
        required
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        onChange={handlerChange}
        value={item.price}
        required
      />
      <label htmlFor="cost">Cost</label>
      <input
        type="number"
        id="cost"
        onChange={handlerChange}
        value={item.cost}
        required
      />
      <label htmlFor="units">Units</label>
      <input
        type="number"
        id="units"
        onChange={handlerChange}
        value={item.units}
        required
      />
      <button>{current ? "Update!" : "Create!"}</button>
      {current && (
        <div>
          <button
            style={{ width: "100%", marginTop: "10px" }}
            onClick={clearAll}
          >
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default AddItem;

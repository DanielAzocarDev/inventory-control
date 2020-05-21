import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./AddItem.scss";

const AddItem = ({ addItem }) => {
  // Tener cuidado no confundir [] con {}, los que se usan son []
  const [item, setItem] = useState({
    title: "",
    price: "",
    cost: "",
    units: "",
  });

  // Funcion para manejas cambios en los inputs y guardarlos en el state(item)
  const handlerChange = (e) => {
    // Asigna el value de los input en el state. viene dentro de hook useState
    setItem({
      // Hacemos un spread para que al obtener el value y id de cada input pasemos al siguiente
      ...item,
      // Es para iterar y crear los keys y values del objeto en relacion al id y values de los inputs
      [e.target.id]: e.target.value,
      id: uuid(),
    });
  };

  // maneja el submit del form
  const handlerSubmit = (e) => {
    // Evita el behavior default de form al hacer submit
    e.preventDefault();

    // Function pasada como props que envia item al state global
    addItem(item);

    // Restaura values de inputs a ""
    setItem({
      title: "",
      price: "",
      cost: "",
      units: "",
    });
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        onChange={handlerChange}
        value={item.title}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        onChange={handlerChange}
        value={item.price}
      />
      <label htmlFor="cost">Cost</label>
      <input
        type="number"
        id="cost"
        onChange={handlerChange}
        value={item.cost}
      />
      <label htmlFor="units">Units</label>
      <input
        type="number"
        id="units"
        onChange={handlerChange}
        value={item.units}
      />
      <button>Create!</button>
    </form>
  );
};

export default AddItem;

// Importamos react y useReducer
import React, { useReducer } from "react";
// Import de context
import ItemContext from "./itemContext";
// Import itemReducer
import itemReducer from "./itemReducer";
// import de uuid para crear ids aleatorias a los items
import { v4 as uuid } from "uuid";
import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  FILTER_ITEMS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const ItemState = ({ children }) => {
  // Creamos el estado inicial
  const initialState = {
    items: [],
  };

  // useReducer extraemos 2 cosas state y dispatch, tambien recibe 2 parametros el reducer que creamos e importamos y el initialState
  const [state, dispatch] = useReducer(itemReducer, initialState);

  // Add Item
  const addItem = (item) => {
    item.id = uuid();
    // dispatch es una funcion que recibe un objeto con el type y el payload
    dispatch({ type: ADD_ITEM, payload: item });
  };
  // Delete Item
  const deleteItem = (id) => {
    // dispatch es una funcion que recibe un objeto con el type y el payload
    dispatch({ type: DELETE_ITEM, payload: id });
  };

  return (
    <ItemContext.Provider value={{ items: state.items, addItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemState;

// Importamos react y useReducer
import React, { useReducer, useEffect } from "react";
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
    current: null,
  };

  // useReducer extraemos 2 cosas state y dispatch, tambien recibe 2 parametros el reducer que creamos e importamos y el initialState
  const [state, dispatch] = useReducer(itemReducer, initialState, () => {
    // Contante para alojar localStorage
    const localData = localStorage.getItem("state");
    //Operador ternario para ver si existe data en el localStorage
    return localData ? JSON.parse(localData) : initialState;
  });

  // Escucha y actualiza el localStorage cuando el state cambia
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

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
  // Set Current
  const setCurrent = (item) => {
    // dispatch es una funcion que recibe un objeto con el type y el payload
    dispatch({ type: SET_CURRENT, payload: item });
  };
  // Clear Current
  const clearCurrent = () => {
    // dispatch es una funcion que recibe un objeto con el type y el payload
    dispatch({ type: CLEAR_CURRENT });
  };

  const unitsTotal = state.items.reduce(
    (totalUnits, items) => totalUnits + parseInt(items.units),
    0
  );

  const incomesTotal = state.items.reduce(
    (totalIncomes, items) => totalIncomes + parseInt(items.price),
    0
  );

  const costsTotal = state.items.reduce(
    (totalCosts, items) => totalCosts + parseInt(items.cost),
    0
  );
  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        current: state.current,
        addItem,
        deleteItem,
        setCurrent,
        clearCurrent,
        unitsTotal,
        incomesTotal,
        costsTotal,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemState;

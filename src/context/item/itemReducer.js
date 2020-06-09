import {
  ADD_ITEM,
  DELETE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  SELL_ITEM,
  FILTER_ITEMS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    // Agregar item
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        itemsTotals: [...state.itemsTotals, action.payload],
      };
    // Borrar item
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => action.payload !== item.id),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case SELL_ITEM:
      return {
        ...state,
        // map de items para buscar el item con la id que coincide con el id del payload
        items: state.items.map((item) =>
          // Operador ternario verifica que el id coincide, si es asi se hace una destructuracion de payload y se le asigna un nuevo valor a units que cambia cada vez que se hace una venta
          item.id === action.payload.id
            ? { ...action.payload, units: parseInt(action.payload.units) - 1 }
            : item
        ),
        sells: [...state.sells, action.payload],
      };
    default:
      return state;
  }
};

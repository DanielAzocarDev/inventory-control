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

export default (state, action) => {
  switch (action.type) {
    // Agregar item
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
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
    default:
      return state;
  }
};

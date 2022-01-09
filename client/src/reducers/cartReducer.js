// eslint-disable-next-line no-unused-vars
import { cartAction } from "../actions/cartAction";
// eslint-disable-next-line no-unused-vars
import {
  ADD_T0_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
} from "../actions/Types";

const initialState = {
  cart: [],
};
function findItemAndSetState(state, item) {
  let itemFound = false;
  for (let i of state.cart) {
    if (i.id === item.id) {
      itemFound = true;
      i.qty += 1;
    }
  }
  if (!itemFound) {
    state = { ...state, cart: [...state.cart, { ...item, qty: 1 }] };
  }
  return state;
}
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return findItemAndSetState(state, action.payload.item);
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload.item),
      };
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item === action.payload.item
            ? { ...item, qty: action.payload.item.qty + 1 }
            : item
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item === action.payload.item
            ? {
                ...item,
                qty:
                  action.payload.item.qty !== 1
                    ? action.payload.item.qty - 1
                    : 1,
              }
            : item
        ),
      };

    default:
  }
  return state;
};
export default cartReducer;

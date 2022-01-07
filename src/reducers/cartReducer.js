import { ADD_TO_CART } from "../actions/Types";

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
    case ADD_TO_CART:
      return findItemAndSetState(state, action.payload.item);

    default:
  }
  return state;
};
export default cartReducer;

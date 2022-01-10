import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  EMPTY_CART,
} from "./Types";
function addtoCart(item) {
  return {
    type: ADD_TO_CART,
    payload: {
      item,
    },
  };
}
function removefromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      item,
    },
  };
}
function incQty(item, qty) {
  return {
    type: INCREMENT,
    payload: {
      item,
      qty,
    },
  };
}
function decQty(item, qty) {
  return {
    type: DECREMENT,
    payload: {
      item,
      qty,
    },
  };
}
export function emptyCart() {
  return {
    type: EMPTY_CART,
  };
}

export const handleaddtoCart = (itemId) => {
  let item = {};
  return function (dispatch) {
    fetch(`http://localhost:3000/products/${itemId}`)
      .then((res) => res.json())
      .then(
        (i) => {
          item = i;
          console.log(item);
          dispatch(addtoCart(item));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};
export const handlerfc = (item) => {
  return function (dispatch) {
    dispatch(removefromCart(item));
  };
};
export const handleinc = (item, qty) => {
  return function (dispatch) {
    dispatch(incQty(item, qty));
  };
};
export const handledec = (item, qty) => {
  return function (dispatch) {
    dispatch(decQty(item, qty));
  };
};

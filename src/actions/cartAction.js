import { ADD_TO_CART } from "./Types";

function addtoCart(item) {
  return {
    type: ADD_TO_CART,
    payload: {
      item,
    },
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
// export default addtoCart;

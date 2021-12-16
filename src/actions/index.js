export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export function addProducts(products) {
  return {
    type: SEARCH_PRODUCTS,
    products,
  };
}

export function handleProductSearch(searchWord) {
  const url = `http://localhost:3000/products?q=${searchWord}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        console.log(products);

        // dispatch the products
        dispatch(addProducts(products));
      });
  };
}

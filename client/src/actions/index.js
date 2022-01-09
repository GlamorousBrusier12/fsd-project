export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const SET_USER = "SET_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export function addProducts(products) {
  return {
    type: SEARCH_PRODUCTS,
    products,
  };
}
export function userLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function userLogout() {
  return {
    type: LOGOUT,
  };
}
export function handleUser(email) {
  const url = `http://localhost:3000/users?email=${email}`;
  return function (dispatch) {
    fetch(url)
      .then((result) => result.json())
      .then((user) => {
        console.log("user : ", user[0]);

        // dispatch the user method
        dispatch(userLogin(user[0]));
      });
  };
}
export function handleCategorySearch(searchWord) {
  const url = `http://localhost:3000/products?Category=${searchWord}`;
  console.log("URL: ", url);
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

export function handleCategoryFilter(searchWord) {
  const url = `http://localhost:3000/products${searchWord}`;
  console.log("URL: ", url);
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
export function renderallProducts() {
  const url = `http://localhost:3000/products`;
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
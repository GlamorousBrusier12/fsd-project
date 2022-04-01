import axios from "axios";

// all the code for the api requests
export function getAllProducts() {
  return axios.get("/product");
}
export function getOneProduct(productId) {
  return axios.get(`/product/${productId}`);
}
export function createUser(userDetails) {
  return axios.post("/user", userDetails);
}

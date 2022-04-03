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
export function getUserById(userId) {
  return axios.get(`/user/${userId}`);
}
export function getReviews(productId) {
  return axios.get(`/review/${productId}`);
}

export function getFaqs(productId) {
  return axios.get(`/faq/${productId}`);
}

export function getAddresses(userId) {
  return axios.get(`/address/${userId}`);
}

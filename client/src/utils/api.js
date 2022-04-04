import axios from "axios";

// all the code for the api requests
export function getAllProducts() {
  return axios.get("/product");
}

// get product by product id
export function getOneProduct(productId) {
  return axios.get(`/product/${productId}`);
}

// create a user
export function createUser(userDetails) {
  return axios.post("/user", userDetails);
}

// get one user
export function getUserById(userId) {
  return axios.get(`/user/${userId}`);
}

// post a review
export function getReviews(productId) {
  return axios.get(`/review/${productId}`);
}

// get all faq
export function getFaqs(productId) {
  return axios.get(`/faq/${productId}`);
}

// get all address
export function getAddresses(userId) {
  return axios.get(`/address/${userId}`);
}

// get all orders
export function getMyOrders(userId) {
  return axios.get(`/orders/${userId}`);
}

// get user debit cards

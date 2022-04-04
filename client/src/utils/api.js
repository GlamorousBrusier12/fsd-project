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
export function updateUser(userId, userDetails) {
  return axios.patch(`/user/${userId}`, userDetails);
}
export function getReviews(productId) {
  return axios.get(`/review/${productId}`);
}

export function postReview(reviewDetails) {
  return axios.post("/review", reviewDetails);
}

export function getFaqs(productId) {
  return axios.get(`/faq/${productId}`);
}
export function getMyOrders(userId) {
  return axios.get(`/orders/${userId}`);
}
export function getDeliveryAddress(userId) {
  return axios.get(`/address/${userId}`);
}
export function postDeliveryAddress(addressDetails) {
  return axios.post("/address", addressDetails);
}
export function updateDeliveryAddress(addressId) {
  return axios.patch(`/address/${addressId}`);
}
export function deleteDeliveryAddress(addressId) {
  return axios.delete(`/address/${addressId}`);
}

export function getCards(userId) {
  return axios.get(`/debitcard/user/${userId}`);
}
export function postCard(cardDetails) {
  return axios.post("/debitcard", cardDetails);
}
export function updateCard(cardId) {
  return axios.patch(`/debitcard/${cardId}`);
}
export function deleteCard(cardId) {
  return axios.delete(`/debitcard/${cardId}`);
}

export function getUpi(userId) {
  return axios.get(`/upi/user/${userId}`);
}
export function postUpi(upiDetails) {
  return axios.post("/upi", upiDetails);
}
export function updateUpi(upiId) {
  return axios.patch(`/upi/${upiId}`);
}
export function deleteUpi(upiId) {
  return axios.delete(`/upi/${upiId}`);
}

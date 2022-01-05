import { combineReducers } from "redux";
import products from "./products";
import user from "./users";
import search from "./search";
export default combineReducers({
  products,
  user,
  search,
});

import { combineReducers } from "redux";
import products from "./products";
import users from "./users";
import search from "./search";
import cartReducer from './cartReducer';
export default combineReducers({
  products,
  users,
  search,
  cartReducer,
});

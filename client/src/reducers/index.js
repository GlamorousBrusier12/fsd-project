import { combineReducers } from "redux";
import products from "./products";
import user from "./users";
import search from "./search";
import cartReducer from './cartReducer';
export default combineReducers({
  products,
  user,
  search,
  cartReducer,
});

import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLogin";
import cartReducer from "../features/cart/CartSlice";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
  cart: cartReducer,
});

export default allReducers;

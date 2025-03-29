import { configureStore } from "@reduxjs/toolkit";
import cartRender from "./features/cart/CartSlice";
import modalReducer from "./features/modal/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartRender,
    modal: modalReducer,
  },
});

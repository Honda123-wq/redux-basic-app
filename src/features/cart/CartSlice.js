import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../CartItems";
// import { calculateNewValue } from "@testing-library/user-event/dist/utils";

//買い物かごの初期化
const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  //userSelectorで呼び出すSliceの名前
  name: "Cart",
  //SliceのState
  initialState,
  //SliceのReducer(Action CreatorはReducerに含まれる)
  reducers: {
    clearCart: (state) => {
      return { cartItems: [], amount: 0, total: 0 };
    },
    //教科書にないよ！
    resetCart: (state) => {
      return { cartItems: cartItems, amount: cartItems.length, total: 0 };
    },
    //教科書にないよ！

    removeItem: (state, action) => {
      //
      const itemId = action.payload;
      //filter 条件式がtrue のものを残す。その考え方を反転→選択した商品以外を残す
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        // カンマ削除して数値に変換！
        const numericPrice = parseInt(item.price.replace(/,/g, ""));
        total += item.amount * numericPrice; // ← ここを修正！
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  clearCart,
  resetCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;

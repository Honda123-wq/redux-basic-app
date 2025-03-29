import { createSlice } from "@reduxjs/toolkit";
// import React from "react";

const initialState = {
  isOpen: false,
};
const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (stete, action) => {
      stete.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;

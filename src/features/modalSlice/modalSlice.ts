import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: "signIn",
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.content = "signIn";
    },

    setContent: (state, action) => {
        
      state.content = action.payload;
    },
  },
});

export const { openModal, closeModal, setContent } = modalSlice.actions;

export default modalSlice.reducer;

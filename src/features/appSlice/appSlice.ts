import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem('theme') || "light",
  isUserLogged: false,
  isAppLoading: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    userIsLoggedIn: (state) => {
      state.isUserLogged = true;
    },
    userIsLoggedOut: (state) => {
      state.isUserLogged = false;
    },
    appIsLoading: (state) => {
      state.isAppLoading = true;
    },
    appIsNotLoading: (state) => {
      state.isAppLoading = false;
    },
  },
});

export const {
  toggleTheme,
  userIsLoggedIn,
  userIsLoggedOut,
  appIsLoading,
  appIsNotLoading,
} = appSlice.actions;

export default appSlice.reducer;

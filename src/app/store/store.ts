import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../../features/appSlice/appSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import modalSlice from "../../features/modalSlice/modalSlice";
import userSlice from "../../entities/User/model/slice/userSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    modal: modalSlice,
    user: userSlice,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "../features/userSlice";
import ticketsSlice from "../features/ticketsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    tickets: ticketsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

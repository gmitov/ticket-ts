import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import storage from "redux-persist/lib/storage";

import userSlice from "../features/userSlice";
import ticketsSlice from "../features/ticketsSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfigUserSlice = {
  key: "userSlice",
  storage,
};

const persistConfigTicketsSlice = {
  key: "ticketsSlice",
  storage,
};

const persistedUserSliceReducer = persistReducer(
  persistConfigUserSlice,
  userSlice
);
const persistedTicketsSliceReducer = persistReducer(
  persistConfigTicketsSlice,
  ticketsSlice
);

export const store = configureStore({
  reducer: {
    user: persistedUserSliceReducer,
    ticketFilter: persistedTicketsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

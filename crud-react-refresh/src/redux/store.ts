import { configureStore } from "@reduxjs/toolkit";
import shoeReducer from "./slices/shoeSlice";

export const store = configureStore({
  reducer: {
    shoes: shoeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


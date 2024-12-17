import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduxslice/userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

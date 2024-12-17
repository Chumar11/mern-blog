import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSucess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
      state.loading = false;
    },
    signInFailture: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInFailture, signInStart, signInSucess } = userSlice.actions;
export default userSlice.reducer;
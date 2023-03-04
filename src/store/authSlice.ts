import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated:
    localStorage.getItem("isAuthenticated") === "true" ? true : false,
};

const authSlice = createSlice({
  name: "isAuthenticated",
  initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
      localStorage.setItem(
        "isAuthenticated",
        state.isAuthenticated.toString()
      );
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuthencticated:
    localStorage.getItem("isAuthencticated") === "true" ? true : false,
};

const authSlice = createSlice({
  name: "isAuthencticated",
  initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthencticated = action.payload;
      localStorage.setItem(
        "isAuthencticated",
        state.isAuthencticated.toString()
      );
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../rtk/slices/homeSlice.js";
import authSlice from "../rtk/slices/authSlice.js";
import adminSlice from "./slices/adminSlice.js";

export const store = configureStore({
  reducer: {
    home: homeSlice,
    auth: authSlice,
    admin: adminSlice,
  },
});

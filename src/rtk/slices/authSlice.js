import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for form submission
import { api } from "../../utils/api.js"; // Ensure correct import of Axios instance

export const login = createAsyncThunk(
  "events/login",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/api/v1/auth/login", values, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loading: false,
    errorMessage: null,
    successMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.user = payload.data;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      });
  },
});
export default authSlice.reducer;

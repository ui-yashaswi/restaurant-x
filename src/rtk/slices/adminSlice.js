import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for form submission
import { api } from "../../utils/api.js"; // Ensure correct import of Axios instance

export const fetchEvents = createAsyncThunk(
  "admin/events",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/api/v1/admin/events", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchCaterings = createAsyncThunk(
  "admin/caterings",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/api/v1/admin/caterings", {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    events: [],
    caterings: [],
    loading: false,
    errorMessage: null,
    successMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(fetchEvents.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.events = payload.data;
      })
      .addCase(fetchEvents.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      })
      .addCase(fetchCaterings.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(fetchCaterings.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;
        state.caterings = payload.data;
      })
      .addCase(fetchCaterings.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      });
  },
});
export default adminSlice.reducer;

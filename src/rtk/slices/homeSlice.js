import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

// Async thunk for form submission
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api"; // Ensure correct import of Axios instance

export const submitEventForm = createAsyncThunk(
  "events/submitEventForm",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "api/Eventcatering.php/createBooking",
        formData,
        {
          withCredentials: true,
        }
      );

      if (response?.data?.success !== true) {
        throw new Error(response?.data?.message || "API call failed");
      }

      return response.data; // Return data on success
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);

const eventSlice = createSlice({
  name: "events",
  initialState: {
    myEvents: [],
    loading: false,

    errorMessage: null,
    successMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitEventForm.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(submitEventForm.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.successMessage = payload.message;
        state.myEvents = [...state.myEvents, payload.data];
      })
      .addCase(submitEventForm.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload.error;
      });
  },
});

export default eventSlice.reducer;

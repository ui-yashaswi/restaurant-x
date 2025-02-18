import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for form submission
import { api } from "../../utils/api.js"; // Ensure correct import of Axios instance

export const submitEventForm = createAsyncThunk(
  "events/submitEventForm",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/api/v1/home/bookevent", values, {
        withCredentials: true,
      });

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const submitCateringForm = createAsyncThunk(
  "catering/submitCateringForm",
  async (values, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/api/v1/home/bookcatering", values, {
        withCredentials: true,
      });

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const homeSlice = createSlice({
  name: "events",
  initialState: {
    myEvents: [],
    loading: false,
    myCaterings: [],
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
      })

      .addCase(submitCateringForm.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(submitCateringForm.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.successMessage = payload.message;

        state.myCaterings = [...state.myEvents, payload.data];
      })
      .addCase(submitCateringForm.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload?.error;
      });
  },
});

export default homeSlice.reducer;

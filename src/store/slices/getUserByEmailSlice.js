import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/interceptors/axiosInterceptor";

// Initial state for the slice
const initialState = {
  data: null,
  loading: false,
  error: "",
};

// Async thunk to fetch user by email
export const getUserByEmail = createAsyncThunk(
  "getUserByEmail",
  async (email) => {
    const response = await axiosInstance.get(`/users/getByEmail?email=${email}`);
    return response.data;
  }
);

// Creating the slice
const getUserByEmailSlice = createSlice({
  name: "getUserByEmail",
  initialState,
  reducers: {
    setEmailDataEmpty(state) {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserByEmail.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getUserByEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUserByEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export const { setEmailDataEmpty } = getUserByEmailSlice.actions;
export default getUserByEmailSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/interceptors/axiosInterceptor";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const updateLegalContent = createAsyncThunk(
  "legalContent/updateLegalContent",
  async (legalContentData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/legal-contents/update", legalContentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Update failed");
    }
  }
);

const updateLegalContentSlice = createSlice({
  name: "updateLegalContent",
  initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateLegalContent.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateLegalContent.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(updateLegalContent.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = updateLegalContentSlice.actions;
export default updateLegalContentSlice.reducer;

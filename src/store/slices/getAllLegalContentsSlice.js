import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/interceptors/axiosInterceptor";

// Async thunk to fetch all LegalContents
export const getAllLegalContents = createAsyncThunk(
  "legalContents/getAllLegalContents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/legal-contents/getAll"); // API endpoint
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "LegalContent verileri alınırken bir hata oluştu."
      );
    }
  }
);

const getAllLegalContentsSlice = createSlice({
  name: "legalContents",
  initialState: {
    legalContents: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLegalContents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllLegalContents.fulfilled, (state, action) => {
        state.loading = false;
        state.legalContents = action.payload;
      })
      .addCase(getAllLegalContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getAllLegalContentsSlice.reducer;

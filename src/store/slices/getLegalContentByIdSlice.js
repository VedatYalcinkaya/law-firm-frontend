import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/interceptors/axiosInterceptor";

export const getLegalContentById = createAsyncThunk(
  "legalContent/getLegalContentById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/legal-contents/getById?id=${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred while fetching the legal content");
    }
  }
);

const initialState = {
  legalContent: null,
  loading: false,
  error: null,
};

const getLegalContentByIdSlice = createSlice({
  name: "legalContentDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLegalContentById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getLegalContentById.fulfilled, (state, action) => {
      state.loading = false;
      state.legalContent = action.payload;
    });
    builder.addCase(getLegalContentById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch the legal content";
    });
  },
});

export default getLegalContentByIdSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/interceptors/axiosInterceptor";

export const getArticleById = createAsyncThunk(
  "article/getArticleById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/articles/getById?id=${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred while fetching the article");
    }
  }
);

const initialState = {
  article: null,
  loading: false,
  error: null,
};

const getArticleByIdSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticleById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getArticleById.fulfilled, (state, action) => {
      state.loading = false;
      state.article = action.payload;
    });
    builder.addCase(getArticleById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch the article";
    });
  },
});

export default getArticleByIdSlice.reducer;

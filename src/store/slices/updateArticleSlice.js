import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/interceptors/axiosInterceptor";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const updateArticle = createAsyncThunk(
  "article/updateArticle",
  async (articleData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/articles/update", articleData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Update failed");
    }
  }
);

const updateArticleSlice = createSlice({
  name: "updateArticle",
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
      .addCase(updateArticle.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(updateArticle.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = updateArticleSlice.actions;
export default updateArticleSlice.reducer;

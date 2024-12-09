import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/interceptors/axiosInterceptor';

const initialState = {
  loading: false,
  error: "",
};

export const deleteArticle = createAsyncThunk(
  'article/deleteArticle',
  async (articleId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete('/articles/delete', {
        data: { id: articleId },
      });
      return response.data;
    } catch (error) {
      const axiosError = error;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const deleteArticleSlice = createSlice({
  name: 'deleteArticle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteArticle.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteArticle.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteArticle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Makale silinirken bir hata oluştu.";
    });
  },
});

export default deleteArticleSlice.reducer;

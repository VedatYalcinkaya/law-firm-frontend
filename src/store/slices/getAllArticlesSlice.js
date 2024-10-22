import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/interceptors/axiosInterceptor';

// Async thunk to fetch all articles
export const getAllArticles = createAsyncThunk(
  'articles/getAllArticles',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/articles/getAll');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred while fetching articles');
    }
  }
);

// Initial state for the articles slice
const initialState = {
  article: [],
  loading: false,
  error: null,
};

// Creating the slice
const getAllArticlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllArticles.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
    });
    builder.addCase(getAllArticles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to fetch articles';
    });
  },
});

export default getAllArticlesSlice.reducer;

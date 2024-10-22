import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/interceptors/axiosInterceptor';


const initialState = {
  data: null,
  loading: false,
  error: "",
};

export const postArticle = createAsyncThunk(
  'article/postArticle',
  async (articleData, { rejectWithValue }) => {
    try {
      // Eğer imagePath set edilmemişse, bir hata fırlat
      if (!articleData.imagePath) {
        return rejectWithValue('Image path is required.');
      }

      // imagePath set edilmiş, makale verilerini gönder
      const response = await axiosInstance.post('/articles/add', articleData);
      return response.data;
    } catch (error) {
      const axiosError = error;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const addArticleSlice = createSlice({
  name: 'addArticle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postArticle.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(postArticle.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(postArticle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred while posting the article.";
    });
  },
});

export default addArticleSlice.reducer;

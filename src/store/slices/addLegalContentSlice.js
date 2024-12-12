import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/interceptors/axiosInterceptor';

const initialState = {
  data: null,
  loading: false,
  error: "",
};

// AsyncThunk for posting legal content
export const postLegalContent = createAsyncThunk(
  'legalContent/postLegalContent',
  async (legalContentData, { rejectWithValue }) => {
    try {
      // Eğer title veya content boş ise hata döndür
      if (!legalContentData.title || !legalContentData.content) {
        return rejectWithValue('Title and content are required.');
      }

      // API'ye POST isteği gönder
      const response = await axiosInstance.post('/legal-contents/add', legalContentData);
      return response.data;
    } catch (error) {
      const axiosError = error;
      return rejectWithValue(axiosError.response?.data || 'An error occurred while posting the legal content.');
    }
  }
);

const addLegalContentSlice = createSlice({
  name: 'addLegalContent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLegalContent.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(postLegalContent.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(postLegalContent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "An error occurred while posting the legal content.";
    });
  },
});

export default addLegalContentSlice.reducer;

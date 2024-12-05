import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/interceptors/axiosInterceptor';

// Başlangıç durumu (initial state)
const initialState = {
  data: null,
  loading: false,
  error: null,
  isSignedIn: localStorage.getItem("isSignedIn") === "true" || false,
};

// Giriş işlemini gerçekleştiren asenkron işlev
export const postSignIn = createAsyncThunk('signIn/postSignIn', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/auth/authenticate', credentials);
    return response.data; 
  } catch (error) {
    if (error.response && error.response.data) {
      return rejectWithValue(error.response.data);
    }
    return rejectWithValue(error.message);
  }
});

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    isSignedIn(state, action) {
      state.isSignedIn = action.payload;
      localStorage.setItem("isSignedIn", action.payload.toString());
    },
    logout(state) {
      state.data = null;
      state.isSignedIn = false;
      localStorage.removeItem("isSignedIn");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSignIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.isSignedIn = true;
        localStorage.setItem("isSignedIn", "true");
      })
      .addCase(postSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred.";
      });
  },
});

// Reducer'daki fonksiyonları dışa aktarma
export const { isSignedIn, logout } = signInSlice.actions;

export default signInSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/interceptors/axiosInterceptor"; // Eğer bir axiosInterceptor kullanıyorsanız

// Async Thunk ile API çağrısı
export const sendEmail = createAsyncThunk(
  "email/sendEmail",
  async (emailData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/email/send-email",
        emailData
      );
      return response.data; // Başarılı yanıt döner
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "E-posta gönderimi başarısız oldu"
      );
    }
  }
);

const sendEmailSlice = createSlice({
  name: "sendEmail",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetEmailState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.message = "E-posta başarıyla gönderildi!";
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "E-posta gönderimi sırasında bir hata oluştu.";
      });
  },
});

export const { resetEmailState } = sendEmailSlice.actions;

export default sendEmailSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/interceptors/axiosInterceptor";

const initialState = {
  loading: false,
  error: "",
};

export const deleteLegalContent = createAsyncThunk(
  "legalContent/deleteLegalContent",
  async (legalContentId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete("/legal-contents/delete", {
        data: { id: legalContentId }, // Backend'e gönderilecek ID
      });
      return response.data;
    } catch (error) {
      const axiosError = error;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

const deleteLegalContentSlice = createSlice({
  name: "deleteLegalContent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteLegalContent.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteLegalContent.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteLegalContent.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message || "Çalışma alanı silinirken bir hata oluştu.";
    });
  },
});

export default deleteLegalContentSlice.reducer;

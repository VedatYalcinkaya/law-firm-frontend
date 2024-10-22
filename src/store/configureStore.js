import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./slices/loadingSlice";
import addArticleSlice from "./slices/addArticleSlice";
import getAllArticlesSlice from "./slices/getAllArticlesSlice";
import { setStore } from "../utils/interceptors/axiosInterceptor";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    addArticle: addArticleSlice,
    getAllArticles: getAllArticlesSlice,
  },
});

setStore(store);

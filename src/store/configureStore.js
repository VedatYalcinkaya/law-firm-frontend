import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./slices/loadingSlice";
import addArticleSlice from "./slices/addArticleSlice";
import getAllArticlesSlice from "./slices/getAllArticlesSlice";
import getArticleByIdSlice from "./slices/getArticleByIdSlice";
import { setStore } from "../utils/interceptors/axiosInterceptor";
import getUserByEmailSlice from "./slices/getUserByEmailSlice";
import signInSlice from "./slices/signInSlice"
import  deleteArticleSlice  from "./slices/deleteArticleSlice";
import  updateArticleSlice  from "./slices/updateArticleSlice";
import  sendEmailSlice  from "./slices/sendEmailSlice";
import addLegalContentSlice from "./slices/addLegalContentSlice";
import getLegalContentByIdSlice from "./slices/getLegalContentByIdSlice"
import updateLegalContentSlice from "./slices/updateLegalContentSlice";
import getAllLegalContentsSlice from "./slices/getAllLegalContentsSlice";
import deleteLegalContentSlice from "./slices/deleteLegalContentSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    addArticle: addArticleSlice,
    getAllArticles: getAllArticlesSlice,
    articleDetails: getArticleByIdSlice,
    getUserByEmail:getUserByEmailSlice,
    signIn:signInSlice,
    deleteArticle:deleteArticleSlice,
    updateArticle:updateArticleSlice,
    sendEmail:sendEmailSlice,
    addLegalContent:addLegalContentSlice,
    legalContentDetails:getLegalContentByIdSlice,
    updateLegalContent:updateLegalContentSlice,
    getAllLegalContents:getAllLegalContentsSlice,
    deleteLegalContent:deleteLegalContentSlice,

  },
});

setStore(store);

import axios from "axios";
import { toast } from "react-toastify";
import {
  decreaseRequestCount,
  increaseRequestCount,
} from "../../store/slices/loadingSlice";
import tokenService from "../../services/tokenService";

let store; // Redux store'u burada tanımlıyoruz

// Store'u set etmek için bir fonksiyon oluşturuyoruz
export const setStore = (_store) => {
  store = _store;
};

// Axios instancemizi oluşturuyoruz
const axiosInstance = axios.create({
  baseURL: "http://46.202.155.249:8080/api/", // Backend API'nin temel URL'sini burada belirtiyoruz
});

// İstek öncesi yapılacak işlemler
axiosInstance.interceptors.request.use((config) => {
  const token = tokenService.getToken(); // Token'ı local storage'dan al

  if (token) {
    config.headers.Authorization = "Bearer " + token; // Eğer token varsa header'a ekle
  }

  // Store mevcutsa yükleme durumunu artır
  if (store) {
    store.dispatch(increaseRequestCount());
  }

  console.log("A request is being made...");
  return config;
});

// Yanıt ve hataları ele alacak interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Store mevcutsa yükleme durumunu azalt (yanıt alındı)
    if (store) {
      store.dispatch(decreaseRequestCount());
    }

    // Eğer yanıt başarılı bir şekilde 201 döndüyse, başarılı bir toast göster
    if (response.status === 201) {
      toast.success("Creation Successful");
    }
    return response; // Yanıtı geri döndür
  },
  (error) => {
    // Hata durumunda store mevcutsa yükleme durumunu azalt
    if (store) {
      store.dispatch(decreaseRequestCount());
    }

    // Hataları yönetme
    if (error.response) {
      const status = error.response.status;
      if (status === 400) {
        if (error.response.data.detail) {
          toast.error(error.response.data.detail); // Detay varsa hatayı göster
        } else {
          toast.error("Something went wrong");
        }
      } else if (status === 500) {
        toast.error("Internal Server Error");
      } else if (status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("An error occurred: " + error.response.statusText);
      }
    } else if (error.request) {
      toast.error("No response received from server");
    } else {
      toast.error("Error: " + error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

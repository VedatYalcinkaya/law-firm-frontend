import axios from "axios";
import { toast } from "react-toastify";

let store; // Store değişkeni, daha sonra set edilecek

export const setStore = (_store) => {
  store = _store;
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

axiosInstance.interceptors.request.use((config) => {
  // Bu noktada store'un tanımlandığından emin olabilirsiniz
  if (store) {
    store.dispatch({ type: "loading/increaseRequestCount" });
  }
  console.log("A request is being made...");
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (store) {
      store.dispatch({ type: "loading/decreaseRequestCount" });
    }
    if (response.status === 201) {
      toast.success("Creation Successful");
    }
    return response;
  },
  (error) => {
    if (store) {
      store.dispatch({ type: "loading/decreaseRequestCount" });
    }

    if (error.response) {
      const status = error.response.status;
      if (status === 400) {
        if (error.response.data.detail) {
          toast.error(error.response.data.detail);
        } else {
          toast.error("Something went wrong");
        }
      } else if (status === 500) {
        toast.error("Internal Server Error");
      } else if (status === 401) {
        toast.error("Invalid email or password ");
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

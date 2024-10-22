import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});


axiosInstance.interceptors.request.use((config: any) => {
    return config;
});

axiosInstance.interceptors.response.use(
    (response: any) => {
      return response;
    },
    (error) => {
      if (typeof error.response === "undefined") {
        useNuxtApp().$toast.error("kindly check your network connection", {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      } else {
        useNuxtApp().$toast.error(error.response.data.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      }
    }
  );
  
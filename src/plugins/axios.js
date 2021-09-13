import store from "@/store";
import router from "@/routes";

const axios = require("axios");

axios.defaults.baseURL = "http://localhost:8000/";

axios.defaults.headers.common["Authorization"] =
  localStorage.getItem("token") || "";

axios.defaults.withCredentials = true;

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent

    store.commit("errors/error", {});

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    switch (error.response.status) {
      case 401:
      case 403:
      case 404:
        router.push({
          name: "error",
          props: {
            error: {
              message: error.response.data.message,
              status: error.status,
            },
          },
        });
        break;
      case 422:
        store.commit("errors/error", error.response.data);
        break;
      default:
        console.log(error.response.data);
    }

    return Promise.reject(error);
  }
);

export default axios;

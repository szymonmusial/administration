import axios from "axios";
import simulateServerDelay from "./simulateServerDelay";
const config = {
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
};

const axiosClient = axios.create(config);

axiosClient.interceptors.response.use(
  async (response) => {
    await simulateServerDelay();
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(
  async (request) => {
    await simulateServerDelay();
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// FAKE JwtToken

axiosClient.interceptors.response.use(
  async (response) => {
    const responseURL = response.request.responseURL;
    if (responseURL == "http://localhost:3000/auth/") {
      const data = response.data;
      console.log("FAKE JwtToken");
      console.log(data);
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;

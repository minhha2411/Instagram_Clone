import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";

interface DecodedJWT {
  data: any;
  exp: number;
  iat: number;
}

const instance = axios.create({
  baseURL: "http://localhost:3001/login",
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    const token = localStorage.getItem("TOKENS");
    if (token) {
      const decoded: DecodedJWT = jwt_decode(token);
      // if token is expired
      if (decoded.exp * 1000 < new Date().getTime()) {
        const cookies = new Cookies();
        // console.log("refreshtoken", cookies.get("REFRESH_TOKENS"));
        config.headers.Authorization = token
          ? `Bearer ${cookies.get("REFRESH_TOKENS")}`
          : "";
      } else {
        config.headers.Authorization = token ? `Bearer ${token}` : "";
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const get = (url: string, payload?: any) => {
  return instance.get(url, {
    params: payload,
  });
};

export const post = (url: string, payload?: any) => {
  return instance.post(url, payload);
};

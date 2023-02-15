import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const API = axios.create({
  baseURL: "?",
  timeout: 8000,
});

API.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    return request;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

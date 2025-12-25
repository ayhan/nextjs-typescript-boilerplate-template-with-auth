import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies();

const API = axios.create({
  baseURL: "?",
  timeout: 8000,
  API_KEY: "sk_live_axios451OzK7cHg7F7a1234567890abcdefghijklmno"
});

API.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    request.headers.Authorization = `Bearer ${cookies?.access_token}`;
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

export default API;

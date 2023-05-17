import Axios from "axios";
import configs from "../config";

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.API_DOMAIN,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // More settings here
    return config;
  },
  (error) => {
    // More settings here
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // More settings here
    return Promise.reject(error);
  }
);

export const sendGet = (url: string, params?: any) =>
  axiosInstance.get(url, { params }).then((res) => res);
export const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance.post(url, params, { params: queryParams }).then((res) => res);
export const sendPut = (url: string, params?: any) =>
  axiosInstance.put(url, params).then((res) => res);
export const sendPatch = (url: string, params?: any) =>
  axiosInstance.patch(url, params).then((res) => res);
export const sendDelete = (url: string, params?: any) =>
  axiosInstance.delete(url, { params }).then((res) => res);

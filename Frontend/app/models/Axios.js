import axios from "axios";
axios.defaults.withCredentials = true;

export const AxiosR = axios.create({
  baseURL: process.env.url_restaurant,
  headers: {
    withCredentials: true,
  },
});

export const AxiosW = axios.create({
  baseURL: process.env.url_waiter,
  timeout: 10000,
  headers: {
    'withCredentials': true,
  },
});


import axios from "axios";
axios.defaults.withCredentials = true;

export const AxiosR = (req) => axios.create({
  baseURL: process.env.url_restaurant,
  timeout: 10000,
  headers: {
    withCredentials: true,
  },
  validateStatus: function (status) {
    if (status === 401) {
      req.push("/")
    }
    else {
      return status;
    }
  },
});

export const AxiosW = (req) => axios.create({
  baseURL: process.env.url_waiter,
  timeout: 10000,
  headers: {
    'withCredentials': true,
  },
  validateStatus: async function (status) {
    await axios.get(`${process.env.url_restaurant}owner/validate`,{
      'withCredentials': true,
    })
    .then(() => {return status})
    .catch((e) => {
      if (e.response.status === 401) req.push("/")
    })
  },
});


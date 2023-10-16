import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

// Define your API service
const api = axios.create({
  baseURL,
});

const makeRequest = (url: string, params: object = {}) => {
  return api.get(url, {
    params: {
      ...params,
      apiKey: import.meta.env.VITE_API_KEY,
    },
  });
};

export default makeRequest;

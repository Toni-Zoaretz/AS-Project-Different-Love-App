import axios from "axios";

const api = axios.create({
  baseURL: "https://63f67b2aab76703b15c00ab3.mockapi.io/api/v1/",
});

export default api;

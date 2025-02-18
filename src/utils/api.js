import axios from "axios";

export const api = axios.create({
  baseURL: "https://vantillu-backend.onrender.com",
});

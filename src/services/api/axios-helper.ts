import axios from "axios";

export const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${import.meta.env.VITE_API_BASE_URL}`,
});

export const axiosBase = instance;

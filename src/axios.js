import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8000/api/v1",
  // baseURL: "http://dita-website.vercel.app/api/v1",
  baseURL: "https://dita-website.vercel.app/api/v1",
});

export default instance;
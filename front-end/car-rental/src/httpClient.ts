// src/api/httpClient.ts
import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api", // 👈 change to your backend URL
  withCredentials: true, // if you use cookies or JWT
});

export default httpClient;

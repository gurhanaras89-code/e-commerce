import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: { "Content-Type": "application/json" },
});

export function setAuthorizationToken(token) {
  apiClient.defaults.headers.common.Authorization = token;
}

export function clearAuthorizationToken() {
  delete apiClient.defaults.headers.common.Authorization;
}

export default apiClient;

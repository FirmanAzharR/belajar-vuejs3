import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000, // Timeout 5 detik
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Interceptor Request (Tambahkan Token)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Ambil token dari localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("[Request]", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Interceptor Response (Handle Global Error)
api.interceptors.response.use(
  (response) => {
    console.log("[Response]", response);
    return response.data; // Ambil langsung `data` dari response
  },
  (error) => {
    console.error("[Response Error]", error.response);
    if (error.response) {
      // Jika token expired atau unauthorized, logout user
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        // window.location.href = "/login"; // Redirect ke halaman login
      }
    }
    return Promise.reject(error);
  }
);

export default api;

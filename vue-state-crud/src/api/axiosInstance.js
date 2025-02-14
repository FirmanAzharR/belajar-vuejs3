import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000, // Timeout 5 detik
  headers: {
    'Content-Type': 'application/json',
  },
});


// Interceptor untuk menangani error
api.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'Terjadi kesalahan!';

    if (error.response) {
      // Kesalahan dari server (4xx, 5xx)
      message = error.response.data.message || `Error ${error.response.status}: ${error.response.statusText}`;
    } else if (error.request) {
      // Tidak ada respon dari server
      message = 'Tidak ada respon dari server. Coba lagi nanti!';
    } else {
      // Kesalahan saat mengirim permintaan
      message = error.message;
    }

    return Promise.reject(new Error(message));
  }
);

export default api;

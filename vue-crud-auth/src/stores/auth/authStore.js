import { defineStore } from 'pinia'
import { ref,reactive } from 'vue'
import api from '@/api/axiosInstance'


export const authStore = defineStore('authStore', () => {
  const user = reactive({})
  const loading = ref(false)
  const error = ref(null)
  const errorMessage = ref('')

  const login = async (userData) => {
    loading.value = true
    error.value = null
    try {
      const response = await api.post('/auth/login', userData)
      localStorage.setItem('access_token', response.data.access_token) // Simpan token
      localStorage.setItem('role', response.data.user.role) // Simpan token
      Object.assign(user, response.data.user);

    } catch (err) {
        if (err.response) {
            errorMessage.value = err.response.data.message || "Login failed"; // Show API error message
          } else {
            errorMessage.value = "Network error, please try again";
          }
    } finally {
      loading.value = false
    }
  }

  // Add User (CREATE)
  const register = async (userData) => {
    loading.value = true
    error.value = null
    try {
      const response = await api.post('/register', userData)
      user.value.push(response.data)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  return { user, loading, error, login, register }
})

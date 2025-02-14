import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '@/api/axiosInstance';

export const useUserStoreWithApi = defineStore('userStoreWithApi', () => {
  const users = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Fetch Users (READ)
  const fetchUsers = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.get('/users');
      users.value = response.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  // Add User (CREATE)
  const addUser = async (userData) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.post('/users', userData);
      users.value.push(response.data);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  // Update User (EDIT)
  const updateUser = async (id, userData) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.put(`/users/${id}`, userData);
      users.value = users.value.map(user => (user.id === id ? response.data : user));
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  // Delete User (DELETE)
  const deleteUser = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      await api.delete(`/users/${id}`);
      users.value = users.value.filter(user => user.id !== id);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { users, loading, error, fetchUsers, addUser, updateUser, deleteUser };
});

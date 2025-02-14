<script setup>
import { onMounted, ref } from 'vue';
import { useUserStoreWithApi } from '../stores/userStoreWithApi';

const userStore = useUserStoreWithApi();

const newUser = ref({ name: '', email: '' });
const editedUser = ref({ id: null, name: '', email: '' });

// Ambil data user saat komponen dimuat
onMounted(() => {
  if (userStore.users.length === 0) {
    userStore.fetchUsers();
  }
});

// Tambah User
const addUser = () => {
  if (!newUser.value.name || !newUser.value.email) {
    alert('Nama dan email wajib diisi!');
    return;
  }
  userStore.addUser(newUser.value);
  newUser.value = { name: '', email: '' };
};

// Edit User
const setEditUser = (user) => {
  editedUser.value = { ...user };
};

// Simpan Perubahan User
const saveUser = () => {
  if (!editedUser.value.id) return;
  userStore.updateUser(editedUser.value.id, editedUser.value);
  editedUser.value = { id: null, name: '', email: '' };
};

// Hapus User
const removeUser = (id) => {
  if (confirm('Apakah kamu yakin ingin menghapus user ini?')) {
    userStore.deleteUser(id);
  }
};
</script>

<template>
  <div>
    <h2>Daftar Users</h2>

    <p v-if="userStore.loading">Loading...</p>
    <p v-if="userStore.error" class="error">{{ userStore.error }}</p>

    <!-- Form Tambah User -->
    <div>
      <h3>Tambah User</h3>
      <input v-model="newUser.name" placeholder="Nama" />
      <input v-model="newUser.email" placeholder="Email" />
      <button @click="addUser" :disabled="userStore.loading">Tambah</button>
    </div>

    <!-- Form Edit User -->
    <div v-if="editedUser.id">
      <h3>Edit User</h3>
      <input v-model="editedUser.name" placeholder="Nama" />
      <input v-model="editedUser.email" placeholder="Email" />
      <button @click="saveUser" :disabled="userStore.loading">Simpan</button>
      <button @click="editedUser.id = null">Batal</button>
    </div>

    <!-- Daftar Users -->
    <ul v-if="userStore.users.length">
      <li v-for="user in userStore.users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="setEditUser(user)" :disabled="userStore.loading">Edit</button>
        <button @click="removeUser(user.id)" :disabled="userStore.loading">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<style>
.error {
  color: red;
}
</style>

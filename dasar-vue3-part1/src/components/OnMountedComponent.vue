<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   console.log(response)
  users.value = await response.json();
});
</script>

<template>
  <h2>Daftar User</h2>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

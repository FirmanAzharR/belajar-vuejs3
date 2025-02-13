<template>
  <main>
    <h1>This is an home page</h1>
    <button @click="handleLogin(1)">Login</button>
  </main>
</template>

<script setup lang="js">

import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = (id) => {
    localStorage.setItem('auth', 'true')
    localStorage.setItem('role', 'admin')
    router.push(`/user/${id}`) 
}

</script>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header></header>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

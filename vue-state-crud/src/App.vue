<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header></header>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/user/1">User1</RouterLink>
      <RouterLink to="/user/2">User 2</RouterLink>
      <RouterLink to="/user-list">User List</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

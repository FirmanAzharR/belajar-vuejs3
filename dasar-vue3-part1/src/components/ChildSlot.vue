<template>
    <div>
      <slot :user="user"></slot>  <!-- Mengirim data user ke parent -->
    </div>
  </template>
  
  <script setup>
  const user = { name: "John Doe", age: 25 };
  </script>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const message = ref('Tunggu 5 detik...');
let interval;

onMounted(() => {
  interval = setInterval(() => {
    message.value = `Waktu sekarang: ${new Date().toLocaleTimeString()}`;
  }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
  console.log('Timer dibersihkan sebelum komponen dihapus!');
});
</script>

<template>
  <p>{{ message }}</p>
</template>

<script setup>
import { ref, onBeforeUpdate, onUpdated } from 'vue';

const count = ref(0);

onBeforeUpdate(() => {
  console.log('Sebelum update: ', count.value);
});

onUpdated(() => {
  console.log('Setelah update: ', count.value);
});
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="count++">Tambah</button>
</template>

<script setup>
import { inject } from 'vue';

const sharedCount = inject('sharedCount');

const increment = () => {
  sharedCount.value++; // Mengubah nilai ref yang diberikan oleh parent
};
</script>

<template>
  <div>
    <h2>Child Component</h2>
    <p>Shared Count: {{ sharedCount }}</p>
    <button @click="increment">Increase Count</button>
  </div>
</template>

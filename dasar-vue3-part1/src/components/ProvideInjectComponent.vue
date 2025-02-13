<script setup>
import { inject } from 'vue';

const sharedMessage = inject('sharedMessage');
</script>

<template>
  <div>
    <h2>Child Component</h2>
    <p>Received Message: {{ sharedMessage }}</p>
  </div>
</template>

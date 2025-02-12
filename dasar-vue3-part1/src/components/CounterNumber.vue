<script setup>
import { ref } from 'vue';

const count = ref(0);
// const emit = defineEmits(['increment']); // Mendeklarasikan event tanpa validasi

const emit = defineEmits({ // Mendeklarasikan event dengan validasi
  increment: (value) => {
    if (typeof value !== 'number') {
      console.warn('increment harus berupa angka!');
      return false;
    }
    return true;
  }
});

const addCount = () => {
  count.value++;
  emit('increment', count.value); // Mengirim event ke parent
};
</script>

<template>
  <button @click="addCount">Klik Saya ({{ count }})</button>
</template>

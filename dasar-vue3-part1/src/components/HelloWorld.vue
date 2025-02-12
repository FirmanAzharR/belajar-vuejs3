<script setup>
defineProps({
  name: String,
  age: {
    type: Number,
    required: true, // Wajib diisi
    default: 25 // Nilai default jika tidak diberikan
  },
  isActive: Boolean,
  hobbies: Array,
  user: Object
});
</script>

<template>
  <h3>Halo, {{ name }}!</h3>
  <p>Umur: {{ age }}</p>
  <p>Status: {{ isActive ? 'Aktif' : 'Tidak Aktif' }}</p>
  <p>Hobi: {{ hobbies.join(', ') }}</p>
  <p>Nama User: {{ user.name }}</p>
</template>



<style scoped>
h3 {
  color: green;
  font-weight: 600;
}
</style>
<script setup>
import { ref } from 'vue'
defineProps(['modelValue']); // Props default untuk v-model
const emit = defineEmits(['update:modelValue']) // Event default untuk v-model
const testInput = ref('');

</script>

<template>

  <label for="">v-model 1 komponen</label><br>
  <input v-model="testInput" placeholder="Masukkan nama" />
  <p>Nama: {{ testInput }}</p>

  <label for="">v-model emit</label><br>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    placeholder="Masukkan teks"
  />
</template>

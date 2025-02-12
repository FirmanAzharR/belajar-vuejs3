<script setup>
defineProps(["checked"]);
const emit = defineEmits(["update:checked"]);
</script>

<template>
  <p>
    ✅ v-model otomatis mengikat prop (modelValue) dan event (update:modelValue). <br />
    ✅ Bisa menggunakan v-model:nama-prop untuk nama yang lebih deskriptif. <br />
    ✅ Sangat berguna untuk sinkronisasi state antara parent dan child.
  </p>
  <br />
  <label for="checkbox">ini checkbox</label><br />
  <input
    type="checkbox"
    :checked="checked"
    @change="emit('update:checked', $event.target.checked)"
  />
</template>

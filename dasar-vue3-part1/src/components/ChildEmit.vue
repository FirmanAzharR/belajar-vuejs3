<script setup>
const emit = defineEmits(["sendData"]);

function sendInfo() {
  emit("sendData", { name: "John Doe", age: 25 });
}
</script>

<template>
  <button @click="sendInfo">Kirim Data</button>
</template>
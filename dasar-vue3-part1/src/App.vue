<script setup>
import { ref } from "vue";
const message = ref("Hello World");
const fruitList = ref(["banana", "apple", "mango"]);
// const imageUrl = ref("https://vuejs.org/images/logo.png");
const isDisabled = ref(true);
const status = ref("online");
const isVisible = ref(true);
const count = ref(0);

const increment = () => {
  count.value++;
};

const keyPressed = ref("");

const handleKeyup = (event) => {
  keyPressed.value = event.key;
};
</script>

<template>
  <h1>{{ message }}</h1>
  <div class="box">
    <!-- <img v-bind:src="imageUrl" alt="Gambar Vue" /> -->
    <br />
    <button v-bind:disabled="isDisabled">Klik Saya</button>
  </div>
  <div class="box">
    <input v-model="message" placeholder="Your Message" />
  </div>
  <div class="box">
    <p v-if="status === 'online'">User Sedang Online</p>
    <p v-else-if="status === 'away'">User Sedang Away</p>
    <p v-else>User Sedang Offline</p>
  </div>
  <div class="box">
    <p v-show="isVisible">Ini akan muncul jika `isVisible` bernilai true</p>
    <button @click="isVisible = !isVisible">Toggle</button>
  </div>

  <div class="box">
    <ul>
      <li v-for="(item, index) in fruitList" :key="index">
        {{ index + 1 }} - {{ item }}
      </li>
    </ul>
  </div>

  <div class="box">
    <button v-on:click="increment">Tambah</button>
    <p>Counter: {{ count }}</p>
  </div>

  <div class="box">
    <input @keyup="handleKeyup" placeholder="Tekan tombol apa saja" />
    <p>Terakhir ditekan: {{ keyPressed }}</p>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
}

input {
  margin: 10px;
  padding: 8px;
  font-size: 16px;
}

.box {
  margin: 20px;
}
</style>

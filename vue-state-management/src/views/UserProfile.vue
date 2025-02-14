<template>
  <div>
    <h1>This is an UserProfile ID:{{ userId }} Page</h1>
    <button @click="goToUser(10)">Go To Profile View</button>
    <button @click="goToAdminPage">Go To Admin Page</button>
  </div>
  <br />
  <div>
    <h2>Nama: {{ userStore.user.name }}</h2>
    <h3>Umur: {{ userStore.user.age }}</h3>
    <h3>Umur x2: {{ userStore.doubleAge }}</h3>
    <h3>Double Counter: {{ userStore.doubleCounter }}</h3>
    <button @click="changeName">Ganti Nama</button>
    <button @click="userStore.incrementAge">Tambah Umur</button>
    <button @click="userStore.incrementCount">Tambah Counter</button>
  </div>
  <br />
  <div>
    <h2>Count: {{ counterStore.count }}</h2>
    <h3>Double: {{ counterStore.double }}</h3>
    <button @click="counterStore.increment">Tambah</button>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useCounterStore } from '@/stores/counterStore'

const userStore = useUserStore()
const counterStore = useCounterStore()

const changeName = () => {
  userStore.updateName('Alice')
}

const route = useRoute()
const router = useRouter()
const userId = ref(0)

onBeforeMount(() => {
  userId.value = route.params.id
})

watch(route, () => {
  userId.value = route.params.id
})

const goToUser = (id) => {
  router.push(`/profile-view/${id}`) // Berpindah ke halaman dengan ID berbeda
}

const goToAdminPage = () => {
  router.push(`/admin`) // Berpindah ke halaman dengan ID berbeda
}
</script>

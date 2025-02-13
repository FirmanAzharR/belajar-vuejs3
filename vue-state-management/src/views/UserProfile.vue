<template>
  <div>
    <h1>This is an UserProfile ID:{{userId}} Page</h1>
    <button @click="goToUser(10)">Go To Profile View</button>
    <button @click="goToAdminPage">Go To Admin Page</button>
  </div>
</template>


<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
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
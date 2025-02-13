<template>
  <div>
    <h1>This is an Profile View ID:{{ userId }}</h1>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = ref(0);

onBeforeMount(() => {
  userId.value = route.params.id;
});

watch(route, () => {
  userId.value = route.params.id;
});
</script>

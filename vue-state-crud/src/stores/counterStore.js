import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
//pembuatan store dalam setup mode
export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const doubleCount = ref(0)
    const double = computed(() => count.value * 2) //computed tidak bisa disimpan ke pinia perssisted state harus cara alternatid untuk hitung doublecounter

    function increment() {
      count.value++
      doubleCount.value = count.value * 2
    }

    return { count, double, doubleCount, increment }
  },
  {
    persist: [
      {
        key: 'counter',
        pick: ['count'],
        storage: localStorage,
      },
      {
        key: 'doubleCounter',
        pick: ['doubleCount'],
        storage: sessionStorage,
      },
    ],
  }, //custom storage
)

// Watch and log data before it gets persisted
const store = useCounterStore()
watch(
  store,
  (newValue) => {
    console.log('📝 Data before persist:', JSON.stringify(newValue, null, 2))
  },
  { deep: true },
) // Deep watch to track nested changes

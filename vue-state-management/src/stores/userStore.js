import { defineStore } from 'pinia'
//pembuatan store dalam object mode
export const useUserStore = defineStore('user', {
  state: () => ({
    count: 0,
    user: {
      name: 'John Doe',
      age: 25,
    },
  }),

  getters: {
    doubleAge: (state) => state.user.age * 2,
    doubleCounter: (state) => state.count * 2,
  },

  actions: {
    updateName(newName) {
      this.user.name = newName
    },
    incrementAge() {
      this.user.age++
    },

    incrementCount() {
      this.count++
    },
  },
  persist: true, //persistedstate pinia otomatis menyimpan ke localStorage
})

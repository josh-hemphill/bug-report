import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useCounter = defineStore('counter', () => {
  const n = ref(0);
  function getN() {
    return n;
  }
  return {
    n,
    getN
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta))
}

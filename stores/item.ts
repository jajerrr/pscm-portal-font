// stores/useItemStore.js
import { defineStore } from 'pinia'

export const useItemStore = defineStore('itemStore', {
  state: () => ({
    activeItem: 0, 
  }),
  actions: {
    setActiveItem(item : number) {
      this.activeItem = item
    },
  },
})

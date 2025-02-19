// stores/totalMonthlyDataStore.js
import { defineStore } from 'pinia';

export const useTotalMonthlyDataStore = defineStore('totalMonthlyData', {
  state: () => ({
    totalMonthlyData: 0
  }),
  actions: {
    setTotalMonthlyData(value) {
      this.totalMonthlyData = value;
    }
  }
});

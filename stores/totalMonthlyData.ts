// stores/totalMonthlyData.ts
import { defineStore } from 'pinia'

export const useTotalMonthlyDataStore = defineStore('totalMonthlyData', {
  state: () => ({
    totalMonthlyData: 0 as number
  }),
  actions: {
    setTotalMonthlyData(data: number[]) {
      this.totalMonthlyData = data.reduce((a, b) => a + b, 0);
    }
  }
})

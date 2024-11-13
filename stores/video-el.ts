import { defineStore } from "pinia";

export const useVideoELStore = defineStore("vdo", {
  state: () => ({
    status: false,
    url: "https://www.youtube.com/embed/78lNnCitcBM?si=DJAiPr97z-VpQ9wk",
  }),
  actions: {
    setStatus(newStatus: boolean) {
      this.status = newStatus;
    },
  },
});

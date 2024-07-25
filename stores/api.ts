import { defineStore } from "pinia";

export const useApiStore = defineStore("api", {
  state: () => ({
    // apiUrl: "http://localhost:30021",
    // socket: "ws://192.168.88.46:30021/",
    project: "/",

    // apiUrl: "http://27.254.62.100:30021",
    // socket: "ws://27.254.62.100:30021/",
    // project: "/pscm-production/",

    apiUrl: "https://cni-poc.interactivemedia.me",
    socket: "wss://cni-poc.interactivemedia.me/",
    // project: "/pscm-production/",
  }),
});

import { defineStore } from "pinia";
import type { RankCardItem } from "@/interfaces/ranking";

export const useRankCardStore = defineStore("rankCard", {
  state: () => ({
    rankCard: [
      { num: 1, name: "Nuttida A.", score: 999, img: "/images/zone4/Group 1000003302.svg" },
      { num: 2, name: "Nuttida B.", score: 994, img: "/images/zone4/Group 1000003303.svg" },
      { num: 3, name: "Nuttida C.", score: 993, img: "/images/zone4/Group 1000003304.svg" },
      { num: 4, name: "Nuttida D.", score: 992, img: "/images/zone4/Group 1000003305.svg" },
      { num: 5, name: "Nuttida E.", score: 991, img: "/images/zone4/Group 1000003306.svg" },
    ] as RankCardItem[],
  }),
});

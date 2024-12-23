import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    cards: reactive([
      {
        title: "Products",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Categories",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
    ]),
  }),
});

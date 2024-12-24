// stores/cardStore.js
import { defineStore } from "pinia";

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    cards: [
      {
        title: "Products",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Categories",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
    ],
    activeIndex: 0, // เก็บ index ของ card ที่ active
    previousActiveIndex: 0, // เก็บ index ก่อนหน้าที่ active
  }),

  actions: {
    onSlideChange(newIndex) {
      if (this.previousActiveIndex !== newIndex) {
        this.cards[this.previousActiveIndex].isClicked = false;
        this.previousActiveIndex = newIndex;
      }
      this.activeIndex = newIndex;
    },

    toggleClick(index: number) {
      if (index === this.activeIndex) {
        this.cards.forEach((card) => (card.isClicked = false));
        this.cards[index].isClicked = true;
      }
    },

    // onButtonClick(index: string | number) {
    //   alert(`You clicked on card: ${this.cards[index].title}`);
    // },

    resetClick() {
      this.cards.forEach((card) => (card.isClicked = false));
    },
  },
});

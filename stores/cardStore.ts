// stores/cardStore.js
import { defineStore } from "pinia";

const cardData = [
  {
    data: [
      {
        title: "Products1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Categorie1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Service1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
    ],
  },

  {
    data: [
      {
        title: "Products2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Categorie2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Service2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
    ],
  },
  {
    data: [
      {
        title: "Products3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Categorie3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Servic3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
    ],
  },
];

export const useCardStore = defineStore("cardStore", {
  state: () => ({
    cards: [
      {
        title: "Products",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Categories",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
      {
        title: "Services",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.",
        isClicked: false,
        backgroundImage: "/images/building/card.png",
      },
    ],
  }),
  actions: {
    setCardsData(index: number) {
      this.cards = cardData[index].data;
    }
  },
});
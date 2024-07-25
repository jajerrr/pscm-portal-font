import { defineStore } from "pinia";

export const useStatusStore = defineStore("status", {
  state: () => ({
    chat: false,
    chatIcon: false,
    content: false,
    webGL: false,
    webGLAvatar: true,
  }),
  actions: {
    setChatStatus(newStatus: boolean) {
      this.chat = newStatus;
    },
    setChatIconStatus(newStatus: boolean) {
      this.chatIcon = newStatus;
    },
    setContentStatus(newStatus: boolean) {
      this.content = newStatus;
    },
    setWebGLStatus(newStatus: boolean) {
      this.webGL = newStatus;
    },
    setWebGLAvatarStatus(newStatus: boolean) {
      this.webGLAvatar = newStatus;
    },
  },
});

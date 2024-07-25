import { defineStore } from "pinia";
import type { UserStore } from "@/interfaces/user";

export const useUserStore = defineStore("user", {
  state: (): UserStore => ({
    uid: "",
    username: "",
    name: "",
    email: "",
    phone: "",
    gender: 0,
    birthdate: 0,
    affiliation: 0,
    courses: 0,
    notification: 0,
    interest: 0,
    animation: 0,
    photo: "",
    typeLogin: "new",
  }),
  actions: {
    setUser(user: UserStore) {
      this.$patch(user);
    },
    clearUser() {
      this.$reset();
    },
  },
  getters: {
    isAuthenticated: (state): boolean => !!state.uid,
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
    }),
  },
});

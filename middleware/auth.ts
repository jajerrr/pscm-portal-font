import { useUserStore } from "~/stores/user";
import { useApiStore } from "@/stores/api";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  const ApiStore = useApiStore();

  if (!userStore.isAuthenticated) {
    // return navigateTo(ApiStore.project + "login");
  }
});

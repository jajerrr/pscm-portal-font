import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useApiStore } from "@/stores/api";
import io from "socket.io-client";

const newMessage = ref("");
const activeContactData = ref({
  name: "",
  img: "",
  chatLog: [],
});

export function useChat() {
  const userStore = useUserStore();
  const apiStore = useApiStore();
  const socket = io(apiStore.socket, { transports: ["websocket"] });

  const sendMessage = () => {
    if (newMessage.value.trim() !== "") {
      activeContactData.value.chatLog.push({
        uid: userStore.uid,
        message: newMessage.value,
        name: userStore.name,
        photo: userStore.photo,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      let dataSendtoServer = {
        uid: userStore.uid,
        message: newMessage.value,
        roomId: activeContactData.value.roomId,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      socket.emit("sendMessage", dataSendtoServer);
      newMessage.value = "";

      return dataSendtoServer;
    }
  };

  return {
    newMessage,
    activeContactData,
    sendMessage,
  };
}

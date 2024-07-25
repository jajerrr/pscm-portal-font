<template>
  <div class="w-full h-full cursor-pointer" v-if="statusStore.chatIcon">
    <div class="relative z-30 flex ">
      <div @click="statusStore.setChatStatus(!statusStore.chat)">
        <IconsChat />
      </div>
      <div class="w-full h-auto" @click="toggleConnection">
        <IconsVoice v-if="!userStatus.mute" />
        <IconsMute v-if="userStatus.mute" />
      </div>
    </div>
    <div v-if="statusStore.chat" class="fixed left-0 top-0 w-full h-screen flex items-center justify-center">
      <AccessibilityChatDisplay />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useStatusStore } from '@/stores/status';
import { useApiStore } from '@/stores/api';
const statusStore = useStatusStore();
const apiStore = useApiStore();
import io, { Socket } from "socket.io-client";

const socket: Socket = io(apiStore.socket, { transports: ['websocket'] });

const userStatus = ref({
  microphone: true,
  mute: true,
  username: "user#" + Math.floor(Math.random() * 999999),
  online: true,
  roomId: "room1",
});

const getPermissionMic = async (): Promise<MediaStream | null> => {
  try {
    return await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    console.error('Error accessing microphone:', err);
    return null;
  }
};

const mainFunction = async (time: number): Promise<void> => {
  const stream = await getPermissionMic();
  if (stream) {
    console.log(stream);
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    let audioChunks: BlobPart[] = [];

    mediaRecorder.addEventListener("dataavailable", (event: BlobEvent) => {
      audioChunks.push(event.data);
    });

    const stopRecording = () => {
      mediaRecorder.stop();
      setTimeout(() => {
        mediaRecorder.stop();
      }, time);
    };
    socket.on('send', handleSend)
    socket.on("usersUpdate", updateUser)
    mediaRecorder.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunks);
      audioChunks = [];

      const fileReader = new FileReader();
      fileReader.readAsDataURL(audioBlob);
      fileReader.onloadend = () => {
        if (!userStatus.value.microphone || !userStatus.value.online) return;

        const base64String = fileReader.result as string;
        socket.emit("voice", base64String);
      };

      mediaRecorder.start();
      setTimeout(stopRecording, time);
    });
    setTimeout(stopRecording, time);
  }
};

function toggleConnection() {
  userStatus.value.mute = !userStatus.value.mute;
  emitVoiceChat();
}

function emitVoiceChat() {
  socket.emit("joinVoiceChat", userStatus.value);
}

const handleSend = (data: string) => {
  const audio = new Audio(data)
  audio.play()
}

const updateUser = (data: string) => {

}

onMounted(async () => {
  socket.emit("userInformation", userStatus.value);
  // await getPermissionMic();
  await mainFunction(1000)
});

</script>

<style lang="scss" scoped></style>

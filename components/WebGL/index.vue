<template>
    <div class="fixed top-0 left-0 w-full h-screen bg-[#e7f2f4] flex justify-center items-center">
        <!-- <div class="w-10 h-10 bg-black fixed left-0 top-0" @click="sendMessage"></div> -->
        <div class="unity-container" id="unity-container"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useUserStore } from '@/stores/user';
import { useStatusStore } from '@/stores/status';
import { useApiStore } from '@/stores/api';
import io from "socket.io-client";

const userStore = useUserStore();
const apiStore = useApiStore();
const iframeRef = ref(null);
const statusStore = useStatusStore();

const socket = io(apiStore.socket, { transports: ['websocket'] });


onMounted(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const authen = urlParams.get('authen')
    const userId = urlParams.get('userId')
    const unityContainer = document.getElementById('unity-container');
    const buildPath = '/webGL/prod-pscm-metaverse';
    const gameUrl = `${buildPath}/index.html?userId=${userId}&authen=${authen}`;
    // const gameUrl = `${buildPath}/index.html?userId=${userStore.uid}&authen=${userStore.typeLogin == 'guest' ? false : true}`;
    const iframe = document.createElement('iframe');
    iframe.src = gameUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframeRef.value = iframe;
    unityContainer.appendChild(iframe);

    window.addEventListener('message', handleMessage);
    function handleMessage(event) {
        if (event.data && event.data.type === 'showPopUp') {
            statusStore.setContentStatus(true);
        }
    }
    async function getSendMessageToWebGL(data) {
        console.log(data)
        if (data.uid == userId) {
            const message = {
                uid: data.uid,
                message: data.message
            };
            // const iframe = document.querySelector('iframe');
            // iframe.contentWindow.postMessage(message, '*');
        }
    }
    socket.on("sendMessageToWebGL", getSendMessageToWebGL)
    statusStore.setChatIconStatus(true)
})

</script>

<style scoped>
.unity-container {
    width: 100%;
    height: 100%
}
</style>
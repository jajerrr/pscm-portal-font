<template>
    <div class="fixed top-0 left-0 w-full h-screen bg-[#e7f2f4] flex justify-center items-center">
        <div class="unity-container" id="unity-container"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { useStatusStore } from '@/stores/status';
import { useApiStore } from '@/stores/api';

const iframeRef = ref(null);
const userId = ref(null);
const authen = ref(null);
const statusStore = useStatusStore();
const userStore = useUserStore();
const apiStore = useApiStore();

onMounted(async () => {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    authen.value = urlParams.get('authen')
    userId.value = urlParams.get('userId')
    const unityContainer = document.getElementById('unity-container');
    const buildPath = '/webGL/prod-pscm-avatar';
    const gameUrl = `${buildPath}/index.html?userId=${userId.value}&authen=${authen.value}`;
    // const gameUrl = `${buildPath}/index.html?userId=${userStore.uid}&authen=${userStore.typeLogin == 'guest' ? false : true}`;
    const iframe = document.createElement('iframe');
    iframe.src = gameUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframeRef.value = iframe;
    unityContainer.appendChild(iframe);

    window.addEventListener('message', handleMessage);
    function handleMessage(event) {
        if (event.data && event.data.type === 'gotoMetaverse') {
            changeToMetaverse()
        }
    }
    statusStore.setChatIconStatus(false)
    await loginWithGuest()
})


async function changeToMetaverse() {
    statusStore.setWebGLStatus(true);
    statusStore.setWebGLAvatarStatus(false);
}

const loginWithGuest = async () => {
    const fetchData = await $fetch(`${apiStore.apiUrl}/pscm/api/check/login`, {
        method: 'POST',
        body: {
            secretKey: "gdX5wNGrTcvxhlIsMkv0yBr1QiylU1Uq",
            userId: userId.value
        }
    })
    if (fetchData.status) {
        userStore.setUser(fetchData.result)
    }
}
</script>

<style scoped>
.unity-container {
    width: 100%;
    height: 100%
}
</style>
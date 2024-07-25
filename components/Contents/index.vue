<template>
    <NuxtLayout name="content">
        <div class="fixed right-10 top-10 cursor-pointer z-[60px]" @click="statusStore.setContentStatus(false);">
            <IconsCloseContent />
        </div>
        <div class="flex flex-col w-full h-full text-white">
            <div class="h-[70%] ">
                <div class="w-full h-full flex items-center justify-center">
                    <iframe width="100%" height="100%" class="rounded-xl" :src="contentStore.url"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div class="h-[30%] mt-8 mb-[52px] Inter-Light text-xl overflow-y-scroll">
                {{ contentStore.desc }}
            </div>
        </div>

    </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue';
import { useContentStore } from '@/stores/content';
import { useStatusStore } from '@/stores/status';

const contentStore = useContentStore();
const statusStore = useStatusStore();


onMounted(() => {

});
</script>

<style lang="scss" scoped>
.video-player {
    max-width: 500px;
    max-height: 500px;
    margin: auto;
}
</style>
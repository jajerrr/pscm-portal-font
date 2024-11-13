<template>
    <NuxtLayout name="content">
        <div class="fixed right-10 top-10 cursor-pointer z-[60px]"  @click="statusStore.setVdElearnStore(false);">
            <button @click="closeModal" type="button"
                class="modal-close absolute top-1 end-1.5 text-gray-600 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-12 h-12 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
        </div>
        <div class="flex flex-col w-full h-full text-white justify-center">
            <div class="h-[70%] ">
                <div class="w-full h-full flex items-center ">
                    <!-- <iframe width="100%" height="100%" class="rounded-xl" :src="VideoELStore.url"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe> -->
                    <iframe width="100%" height="100%" class="rounded-xl" 
                    src="https://www.youtube.com/embed/78lNnCitcBM?si=DJAiPr97z-VpQ9wk" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
  
    </NuxtLayout>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useVideoELStore } from '@/stores/video-el.ts';
  import { useStatusStore } from '@/stores/status';
  
  const VideoELStore = useVideoELStore();
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
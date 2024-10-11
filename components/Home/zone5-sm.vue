<template>
  <div class="content-w-re mt-[30%]">
    <div class="f-center f-col mb-[10%]">
      <h class="header">Media</h>
      <div class="f-center flex-glow w-full px-[10%]">
        <h class="th-header">สื่อวิดีโอ</h>
      </div>
      <img src="assets/images/zone2/underline.png" class="w-[20rem]" />

      <div class="flex w-screen relative m-[10%]">
        <Swiper class="w-full h-full" :modules="[SwiperPagination]" :centeredSlides="true" :slidesPerView="'auto'"
          :spaceBetween="10" :pagination="true">
          <SwiperSlide v-for="(slide, index) in vdoSlidesStore.vdoslides" :key="index"  class="max-w-full z-[9]"
            style="width: 90% !important;">
            <img :src="slide.img" 
            class="w-full max-h-full cursor-pointer"
             @click="openVideo(slide.vdo)" />
          </SwiperSlide>
          <SwiperControls />

        </Swiper>

      </div>
    </div>
    <teleport to="body">
      <VideoModal :currentVideo="currentVideo" :isModalOpen="isModalOpen" @close-modal="closeModal" />
    </teleport>
    <img src="/images/zone5/Group 1000003307 (3).png" class="image-full-ab top-[-50%] right-[-53%] z-[-1]" style="
    width:100vw;" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useVdoSlidesStore } from '@/stores/video.ts'; 
import VideoModal from '@/components/Home/videopopup.vue'; // import modal 

const vdoSlidesStore = useVdoSlidesStore();

const isModalOpen = ref(false);
const currentVideo = ref(null);

const openVideo = (vdoPath) => {
  currentVideo.value = vdoPath;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  currentVideo.value = null;
};

watch(isModalOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('lock-scroll');
  } else {
    document.body.classList.remove('lock-scroll');
  }
});
</script>

<style>
.lock-scroll {
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 30px;
}

.swiper-pagination-bullet {
  margin-top: 10%;
  background: #e2e2e2;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: #0a1962;
  opacity: 1;
}

.content-sm {
  display: none;
}
</style>

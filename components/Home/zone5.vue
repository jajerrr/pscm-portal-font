<template>
  <div class='content-sm'>
    <HomeZone5Sm />
  </div>
  <div class="content-w-re content-nm ">
    <div class="f-center f-col mb-[10%]">
      <h class="header">Media</h>
      <div class="f-center flex-glow w-full px-[10%]">
        <h class="th-header">สื่อวิดีโอ</h>
      </div>
      <img src="assets/images/zone2/underline.png" class="w-[30vw]" />
      <div class="flex w-screen relative m-[5%]">
        <Swiper class="w-full h-full" :modules="[SwiperEffectCoverflow, SwiperPagination]" :effect="'coverflow'"
          :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }" :pagination="true" :loop="true">
          <SwiperSlide 
          v-for="(slide, index) in vdoSlidesStore.vdoslides" :key="index" 
          class="max-w-full z-[9]"
          style="width: 50% !important;">
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

    <img src="/images/zone5/Group 1000003307 (3).png" class="image-full-ab top-[-50%] right-[-10%] z-[-1]" style="
    width:50vw;" />
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

.content-sm {
  display: none;
}
@media (max-width: 650px) {
  .content-sm {
    display: contents;
  }
  .content-nm {
    display: none;
  }
}
/* Add a class to lock the body scrolling */
.lock-scroll {
  overflow: hidden;
}

</style>

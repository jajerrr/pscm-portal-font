<template>
  <div class="content-sm">
    <HomeZone5Sm />
  </div>
  <div class="content-w-re content-nm mb-[20%]">
    <div class="f-center f-col mb-[10%]">
      <h class="header">Media</h>
      <div class="f-center flex-glow w-full px-[10%]">
        <h class="th-header">สื่อวิดีโอ</h>
      </div>
      <IconsUnderline />
      <div class="flex w-screen relative m-[5%]">
        <Swiper
          class="w-full h-full"
          :modules="[SwiperEffectCoverflow, SwiperPagination]"
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }"
          :pagination="true"
          :loop="true"
        >
          <SwiperSlide
            v-for="(slide, idx) in slides"
            :key="idx"
            class="max-w-full z-[9]"
            style="width: 50% !important;"
          >
            <img
              :src="getVDCover(slide.img)"
              class="w-full max-h-full cursor-pointer"
              @click="openVideo(slide.vdo)"
            />
          </SwiperSlide>
          <SwiperControls />
        </Swiper>
      </div>
    </div>

    <!-- Modal for Video -->
    <div v-if="isModalOpen" class="modal-overlay z-[10]" @click="closeModal">
      <div class="modal-content" @click.stop>
        <video controls autoplay class="video-player">
          <source :src="currentVideo" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button class="modal-close" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const slides = ref([
  { img: '/images/video frame.png', vdo: '/images/vdo.mp4' },
  { img: '/images/image 1560.jpg', vdo: '/images/vdo.mp4' },
  { img: '/images/video frame.png', vdo: '/images/vdo.mp4' },
  { img: '/images/image 1560.jpg', vdo: '/images/vdo.mp4' },
  { img: '/images/video frame.png', vdo: '/images/vdo.mp4' },
  { img: '/images/image 1560.jpg', vdo: '/images/vdo.mp4' },

]);

const isModalOpen = ref(false);
const currentVideo = ref(null);

const getVDCover = (imgPath) => {
  return imgPath;
};

const openVideo = (vdoPath) => {
  currentVideo.value = vdoPath;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  currentVideo.value = null;
};
</script>

<style>
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.917);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
}

.video-player {
  width: 100%;
  height:30vw;
}

.modal-close {
  margin-top: 10px;
  padding: 5px 10px;
  background: #ff5f0f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

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
</style>

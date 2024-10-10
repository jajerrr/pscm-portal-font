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
          <SwiperSlide v-for="(slide, idx) in slides" :key="idx" class="max-w-full z-[9]"
            style="width: 90% !important;">
            <img :src="getVDCover(slide.img)" class="w-full max-h-full cursor-pointer" @click="openVideo(slide.vdo)" />
          </SwiperSlide>
          <SwiperControls />

        </Swiper>

      </div>
    </div>
    <div v-if="isModalOpen" class="modal-overlay z-[10]" @click="closeModal">
      <div class="" @click.stop>
        <video controls autoplay class="video-player-sm">
          <source :src="currentVideo" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
    <img src="/images/zone5/Group 1000003307 (3).png" class="image-full-ab top-[-50%] right-[-53%] z-[-1]" style="
    width:100vw;" />
  </div>
</template>

<script setup>
const slides = ref([
  { img: '/images/video frame.png', vdo: '/images/vdo.mp4' },
  { img: '/images/zone3/room-sm-2.jpg', vdo: '/images/vdo.mp4' },
  { img: '/images/video frame.png', vdo: '/images/vdo.mp4' },
  { img: '/images/zone3/room-sm-2.jpg', vdo: '/images/vdo.mp4' },
  { img: '/images/video frame.png', vdo: '/images/vdo.mp4' }
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
  document.body.classList.remove('lock-scroll'); // Remove class to unlock scrolling
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


.video-player-sm {
  width: 100vh;
  height: 60vw;
}

.content-sm {
  display: none;
}
</style>

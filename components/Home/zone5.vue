<template>
  <div class='content-sm'>
    <HomeZone5Sm />
  </div>
  <div class="content-w-re content-nm mb-[20%]">
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

    <!-- Modal for Video -->
    <div v-if="isModalOpen" 
    class="modal-overlay z-[200]" 
    @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class=" " @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
            <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
              stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
              font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
              <g transform="scale(3.55556,3.55556)">
                <path
                  d="M19,15c-1.023,0 -2.04812,0.39087 -2.82812,1.17188c-1.562,1.562 -1.562,4.09425 0,5.65625l14.17188,14.17188l-14.17187,14.17188c-1.562,1.562 -1.562,4.09425 0,5.65625c0.78,0.78 1.80513,1.17188 2.82813,1.17188c1.023,0 2.04812,-0.39088 2.82813,-1.17187l14.17188,-14.17187l14.17188,14.17188c1.56,1.562 4.09525,1.562 5.65625,0c1.563,-1.563 1.563,-4.09325 0,-5.65625l-14.17187,-14.17187l14.17188,-14.17187c1.562,-1.562 1.562,-4.09425 0,-5.65625c-1.56,-1.561 -4.09625,-1.562 -5.65625,0l-14.17187,14.17188l-14.17187,-14.17187c-0.78,-0.78 -1.80513,-1.17187 -2.82812,-1.17187z">
                </path>
              </g>
            </g>
          </svg>
        </button>
        <video controls autoplay class="video-player">
          <source :src="currentVideo" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
    <img src="/images/zone5/Group 1000003307 (3).png" class="image-full-ab top-[-50%] right-[-10%] z-[-1]" style="
    width:50vw;
   " />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useVdoSlidesStore } from '@/stores/video.ts';  

const vdoSlidesStore = useVdoSlidesStore();
const isModalOpen = ref(false);
const currentVideo = ref(null);

const openVideo = (vdoPath) => {
  currentVideo.value = vdoPath;
  isModalOpen.value = true;
  document.body.classList.add('lock-scroll'); // Add class to lock scrolling
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

/* Modal overlay should cover the entire screen */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; /* Full screen height */
  background: rgba(19, 18, 18, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100; /* Ensure it's above other elements */
}

.modal-content {
  
  width: auto;
    overflow: hidden;
  
}

.video-player {
  width: 100%;
  height: 40vw;
}

.modal-close {
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffffff8e;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
}
</style>

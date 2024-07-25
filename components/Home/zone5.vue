<template>
  <div class="content-w-re">
    <div class="f-center f-col">
      <h class="header">Media</h>
      <div class="f-center flex-glow w-full px-[10%]">
        <h class="th-header text-[150%]">สื่อวิดีโอ</h>
      </div>
      <IconsUnderline />
      <div class="flex w-full relative">
        <Swiper
          class="w-full h-full"
          :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]"
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }"
          :pagination="true"
          :loop="true"
        >
          <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
            <img
              src="assets/images/zone5/video frame.png"
              alt=""
              class="w-full max-h-full"
            />
          </SwiperSlide>

          <!-- useSwiper() within a swiper instance -->
          <SwiperControls />
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const slides = ref([
  "assets/images/zone5/video frame.png",
  "assets/images/zone5/video frame.png",
  "assets/images/zone5/video frame.png",
  "assets/images/zone5/video frame.png",
  "assets/images/zone5/video frame.png",
  "assets/images/zone5/video frame.png",
]);
</script>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 100%;
  width: 50% !important;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
}

.swiper-pagination-bullet {
  margin-top: 10%;
  background: #e2e2e2;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: #005194;
  opacity: 1;
}
.swiper-3d {
  perspective: 200px;
}
</style>

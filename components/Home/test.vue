<template>
  <div class="content-w-re">
    <div class="f-center f-col mb-[10%]">
      
      <div class="flex w-screen relative m-[5%]">
        <Swiper
          class="w-full h-full"
          :modules="[SwiperAutoplay, SwiperEffectCards,]"
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 20,
            stretch: 10,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }"
          :pagination="true"
          :loop="true"
        >
          <SwiperSlide v-for="(slide, idx) in slides" :key="idx" class ="max-w-full">
            <img
              src="assets/images/zone5/video frame.png"
              alt=""
              class="w-full max-h-full"
            />
          </SwiperSlide>
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
  border-radius: 30px;
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
/* .swiper-3d {
  perspective: 50%;
} */
</style>

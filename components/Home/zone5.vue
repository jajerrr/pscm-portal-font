<template>
  <div class="content-w-re">
    <div class="f-center f-col">
      <h class="header">Media</h>
      <div class="f-center flex-glow  w-full px-[10%]">
        <h class="th-header text-[150%]">สื่อวิดีโอ</h>
      </div>
      <IconsUnderline />
      <div class="f-re w-[100vw]">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]"
          :slides-per-view="3"
          :loop="true"
          :effect="'coverflow'"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :coverflow-effect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true,
          }"
        >
          <SwiperSlide v-for="(slide, idx) in slides" :key="idx" >
            <img src="assets/images/image 1560.jpg" class="w-[500px]" alt="" />
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
  "assets/images/image 1560.jpg",
  "assets/images/image 1575.jpg",
  "assets/images/image 1560.jpg",
  "assets/images/image 1575.jpg",
  "assets/images/image 1560.jpg",
  "assets/images/image 1575.jpg",
]);
</script>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 70vh;
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

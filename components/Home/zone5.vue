<template>
  <div class = 'content-sm'>
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
          <SwiperSlide v-for="(slide, idx) in slides" :key="idx" class ="max-w-full" style="width: 50% !important;">
            <img
              src="assets/images/zone5/video frame.png"
              alt=""
              class="w-full max-h-full"
            />
          </SwiperSlide>
          <SwiperControls />
          <!-- <div class="swiper-pagination"></div> -->
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

.content-sm{
    display:none;
  }
@media (max-width:650px) {

  .content-sm{
    display:contents;
  }
  .content-nm{
    display:none;
  }
  
}
</style>

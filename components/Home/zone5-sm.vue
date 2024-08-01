<template>
    <div class="content-w-re">
      <div class="f-center f-col mb-[10%]">
        <h class="header">Media</h>
        <div class="f-center flex-glow w-full px-[10%]">
          <h class="th-header">สื่อวิดีโอ</h>
        </div>
        <IconsUnderline />
        <div class="flex w-screen relative m-[5%]">
          <Swiper
            class="w-full h-full"
            :modules="[SwiperPagination]"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :spaceBetween="10"
            :pagination="true"
          >
            <SwiperSlide v-for="(slide, idx) in slides" :key="idx" class ="max-w-full">
              <img
                src="assets/images/zone5/video frame.png"
                alt=""
                
              />
            </SwiperSlide>
            <SwiperControls />
            
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
    width: 90% !important;
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
    background: #0a1962;
    opacity: 1;
  }
  
  </style>
  

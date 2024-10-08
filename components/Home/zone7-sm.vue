<template>
  <div class="content-w-re mb-[15%]">
    <div class="f-col f-center mb-[15%] mt-[5%]">
      <h class="header">Our service</h>
      <h1 class="th-header text-[2vw]">บริการของเรา</h1>
      <IconsUnderline />
    </div>

    <!----------------------------------------------------  card service  --------------------------------------------------------->
    <div class="f-center">
      <div class="f-row  card-container">
          <Swiper
          :modules="[SwiperPagination]"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :pagination="true"

      >
      <SwiperSlide class="relative  mx-[10px] card-item"
          v-for="(card, index) in serviceCardStore.serviceCards" :key="index"
          >
          <div class="container-z7" style="width: 75%; min-height: 35vh">
            <IconsZone7-1 v-if="card.icon == 1" />
            <IconsZone7-2 v-if="card.icon == 2" />
            <IconsZone7-1 v-if="card.icon == 3" />

            <div class="card-head-z7">{{ card.header }}</div>
            <div class="card-desc-z7">{{ card.desc }}</div>
           
            <div class="flex">
              <IconsAllowupright class="left-[70%]" />
            </div>
          
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
  
    </div>
  </div>
</template>

<script setup>
import { useServiceCardStore } from '@/stores/service.ts';  // นำเข้า Pinia store

const serviceCardStore = useServiceCardStore();  // ใช้ store จาก Pinia
</script>

<style scoped>

.swiper-slide {
display: flex;
justify-content: center;
align-items: center;
height: 100%;

}

.swiper-pagination {
  position: absolute;
  bottom: -10px; /* ปรับเปลี่ยนตำแหน่งตามต้องการ */
  left: 50%;
  transform: translateX(-50%);
}




</style>

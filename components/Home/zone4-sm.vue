<template>
  <div class="content-w-re mt-[30%]">
    <div class="f-center f-col mb-[10%]">
      <h class="header">Ranking</h>
      <div class="f-center flex-glow w-full px-[10%]">
        <h class="th-header">จัดอันดับคะแนน</h>
      </div>
      <img src="assets/images/zone2/underline.png" class="w-[20rem]" />
      <div class="flex w-screen relative m-[10%]" id = "zone4">
        <Swiper
         
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :spaceBetween="15"
        >
          <SwiperSlide
            v-for="(card, index) in rankCardStore.rankCard" :key="index"
            style="width: 50%"
          >
          <div class="flex items-center">
            <h class="num-rank-sm">{{ card.num }}</h>
            <div class="card  ml-[-13%] mt-[15vw]">
              
              <img
                :src="getImageSrc(card.img)"
                alt="Card image"
                class="p-[10%]"
              />
              <div class="card-content">
                <h3 class="name">{{ card.name }}</h3>
                <div class="inline-content">
                  <img
                    src="assets/images/zone4/coin 9.svg"
                    class="small-image"
                  />
                  <p class="score-sm">{{ card.score }}</p>
                </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <img src="/images/zone4/top.png" class="image-full-ab top-[-19%]  z-[-1]" style="
    width: 100vw;
   " />
    <img src="/images/zone4/leftvector.png" class="image-full-ab top-[-15%] left-[3%] z-[-1]" style="
    width: 25vw;
   " />
   <img src="/images/zone4/rightvector.png" class="image-full-ab top-[-10%] right-[3%] z-[-1]" style="
    width: 20vw;
   " />
  </div>
</template>

<script setup>
import { useRankCardStore } from '@/stores/ranking.ts'; // นำเข้า store ที่สร้างไว้
import { onMounted } from 'vue';

const rankCardStore = useRankCardStore(); // เรียกใช้งาน store

// ฟังก์ชันเพื่อคืนพาธของรูปภาพ
const getImageSrc = (imgPath) => {
  return imgPath;
};

// onMounted(() => {
//   rankCardStore.fetchRankCards();  // ดึงข้อมูลบริการจาก API
// });
</script>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card {
  width: 100%;
  max-width: 200px;
  background: #fff;
  border-radius: 10px;
}

.card img {
  width: 100%;
  height: 20%;
  object-fit: cover;
}

.card-content {
  padding: 10%;
  justify-items: center;
  margin-left: 5%;
}

.card-content h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}

.card-content p {
  margin: 0;
  color: #ff7a00;
}

.inline-content {
  display: flex;
  align-items: center;
}

.inline-content .small-image {
  width: 40px;
  height: auto;
  margin-right: 10px;
}
</style>

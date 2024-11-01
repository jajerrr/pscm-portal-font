<template>
  <div class='content-sm'>
    <HomeZone4Sm />
  </div>
  <div class="content-w-re mb-[10%] content-nm" >
    <div class="f-col f-center mb-[5%]">
      <h class="header">Ranking</h>
      <div class="j-center flex-glow w-full px-[10%]">
        <h class="th-header">จัดอันดับคะแนน</h>
      </div>
     
        <img src="assets/images/zone2/underline.png" class="w-[30vw]" />
     
      
    </div>

    <div class="rank-card-content" >
      <div class="f-row" v-for="(id, index) in rankCardStore.rankCard" :key="index">
        <div :style="{ zIndex: 29 - (index) }" class="flex ml-[-1.5vw] w-full">
          <h class="num-normal num-rank">{{ id.num }}</h>
          <div class="card-rank">
            <div class="card-img">
              <img class="z-4-img" :src="getImageSrc(id.img)" />
            </div>
            <div class="text-center mt-[2vw]">
              <h2 class="name">{{ id.name }}</h2>
              <div class="j-center">
                <img class="object-cover h-auto w-[20%]" src="assets/images/zone4/coin 9.png" />
                <h2 class="score">{{ id.score }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/images/zone4/top.png" class="image-full-ab top-[-35%]  z-[-1]" style="
    width: 100vw;
   " />
    <img src="/images/zone4/leftvector.png" class="image-full-ab top-[-15%] left-[3%] z-[-1]" style="
    width: 18vw;
   " />
   <img src="/images/zone4/rightvector.png" class="image-full-ab top-[-10%] right-[3%] z-[-1]" style="
    width: 15vw;
   " />
  </div>
</template>

<script setup>
import { useRankCardStore } from '@/stores/ranking.ts'; // นำเข้า store ที่สร้างไว้
// import { onMounted } from 'vue';

const rankCardStore = useRankCardStore(); // เรียกใช้งาน store

// ฟังก์ชันเพื่อคืนพาธของรูปภาพ
const getImageSrc = (imgPath) => {
  return imgPath;
};

// onMounted(() => {
//   rankCardStore.fetchRankCards();  // ดึงข้อมูลบริการจาก API
// });
</script>


<style scoped>
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
@media (max-width: 1024px) {
  .num-normal {
    @apply text-[15vw] text-[#F3F7FD] z-30 ml-[-3vw] mt-[8vw];
    -webkit-text-stroke: 2px #ff7a00;
  }
}
</style>

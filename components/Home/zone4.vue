<template>
  <div class='content-sm'>
    <HomeZone4Sm />
  </div>
  <div class="content-w-re mb-[20%] content-nm" >
    <div class="f-col f-center mb-[5%]">
      <h class="header">Ranking</h>
      <div class="j-center flex-glow w-full px-[10%]">
        <h class="th-header">จัดอันดับคะแนน</h>
      </div>
      <IconsUnderline />
    </div>

    <div class="rank-card-content">
      <div class="f-row" v-for="(id, index) in rankCard" :key="index">
        <div :style="{ zIndex: 29 - (index) }" class="flex ml-[-1.5vw] w-full">
          <h class="num-normal num-rank">{{ id.num }}</h>
          <div class="card-rank">
            <div class="card-img">
              <img class="z-4-img" :src="getCharImageSrc(id.img)"  />
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rankCard = ref([
  { num: 1, name: "Nuttida A.", score: "999", img: "/images/zone4/Group 1000003302.svg" },
  { num: 2, name: "Nuttida B.", score: "994", img: "/images/zone4/Group 1000003303.svg" },
  { num: 3, name: "Nuttida C.", score: "993", img: "/images/zone4/Group 1000003304.svg" },
  { num: 4, name: "Nuttida D.", score: "992", img: "/images/zone4/Group 1000003305.svg" },
  { num: 5, name: "Nuttida E.", score: "991", img: "/images/zone4/Group 1000003306.svg" },
])

// ฟังก์ชันเพื่อคืนพาธของรูปภาพ
const getCharImageSrc = (imgPath) => {
  return imgPath;  // ใช้พาธที่กำหนดไว้ใน array `detailCard`
};
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

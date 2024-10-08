<template>
  <div class = 'content-sm'>
  <HomeZone7Sm />
  </div>
  <div class="content-w-re mb-[15%] content-nm">
    <div class="f-col f-center mb-[15%] mt-[5%]">
      <h class="header">Our service</h>
      <h1 class="th-header text-[2vw]">บริการของเรา</h1>
      <IconsUnderline />
    </div>
                                                                                                                 
    <!----------------------------------------------------  card service  --------------------------------------------------------->
    <div class="f-center">
      <div class="f-row  card-container">
        <div
          class="relative  mx-[10px] card-item"
         v-for="(card, index) in serviceCardStore.serviceCards" :key="index"
        >
          <div class="container-z7">
            <IconsZone7-1 v-if="card.icon == 1" />
            <IconsZone7-2 v-if="card.icon == 2" />
            <IconsZone7-1 v-if="card.icon == 3" />

            <div class="card-head-z7 SF-TH">{{ card.header }}</div>
            <div class=" SF-TH">{{ card.desc }}</div>
            <div class="flex w-full">
              <IconsAllowupright class = "right-[5%]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useServiceCardStore } from '@/stores/service.ts';  // นำเข้า Pinia store

// import { onMounted } from 'vue';

const serviceCardStore = useServiceCardStore();  // ใช้ store จาก Pinia

// onMounted(() => {
//   serviceCardStore.fetchServiceCards();  // ดึงข้อมูลบริการจาก API
// });
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;

}
.card-item {
  flex: 1;
  min-width: 0;
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
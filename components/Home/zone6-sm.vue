<template>
  <div class="content-w-re mt-[5%] mb-[10%]">
    <div class="f-col f-center mb-[5%]">
      <h class="header">3D Learning object</h>
      <div class="flex-glow j-center w-full px-[10%]">
        <h class="th-header">วิทยาลัยสร้างสรรค์</h>
      </div>
      <IconsUnderline />
    </div>
    <div class="flex">
      <!-- Main Swiper -->
      <Swiper
        @swiper="setSwiperRef"
        class="main-swiper w-1-2-center h-auto container-z6 "
        style="width: 50%; height: 50%; margin-left: 5%; margin-top: 10%; margin-right: 5%;"
        :modules="[Thumbs]"
        :slidesPerView="1"
        
      >
      <SwiperSlide
          class="card-container p-[10%]"
          v-for="(card, index) in detailCard"
          :key="index"
        >
          <div class="">
            <div class="carder-header-z6">{{ card.header }}</div>
            <div class="card-desc-z6">{{ card.desc }}</div>
          </div>
        </SwiperSlide>
        <!-- <SwiperSlide
          class="image-container"
          v-for="(index) in detailCard"
          :key="index"
        >
          <img src="assets/images/zone6/heart_3d 1.png" class="img-nm-z6" />
        </SwiperSlide> -->
      </Swiper>

      <!-- Thumbs Swiper -->

      <!-- <Swiper
        ref="swiperRef1"
        class="thumbs-swiper w-1-2-center h-auto"
        :modules="[Navigation, Thumbs]"
        :centeredSlides="true"
        :slidesPerView="1"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: swiperRef2 }"
      >
      <SwiperSlide
          class="image-container"
          v-for="(index) in detailCard"
          :key="index"
        >
          <img src="assets/images/zone6/heart_3d 1.png" class="img-nm-z6" />
        </SwiperSlide>
     
      </Swiper> -->
      
    </div>
  </div>
</template>

<script setup>
import { Thumbs, Navigation } from "swiper/modules";
import { ref } from "vue";
import "swiper/swiper-bundle.css";
// import {Thumb}  from "swiper/swiper-bundle.js";

const swiperRef1 = ref(null);
const swiperRef2 = ref(null);

const detailCard = ref([
  {
    header: "หัวใจ1",
    desc: "เป็นอวัยวะกล้ามเนื้อซึ่งสูบเลือดทั่วหลอดเลือดไปยังส่วนต่างๆของร่างกายโดยการหดตัวเป็นจังหวะซ้ำ ๆ พบในสัตว์ทุกชนิดที่มีระบบไหลเวียนซึ่งรวมสัตว์มีกระดูกสันหลังด้วยหัวใจสัตว์มีกระดูกสันหลังนั้นประกอบด้วยกล้ามเนื้อหัวใจ และเนื้อเยื่อเกี่ยวพันเป็นหลัก กล้ามเนื้อหัวใจเป็นกล้ามเนื้อลายที่อยู่นอกเหนืออำนาจจิตใจ พบเฉพาะที่หัวใจ และทำให้หัวใจสามารถสูบเลือดได้",
  },
  {
    header: "หัวใจ2",
    desc: "เป็นอวัยวะกล้ามเนื้อซึ่งสูบเลือดทั่วหลอดเลือดไปยังส่วนต่างๆของร่างกายโดยการหดตัวเป็นจังหวะซ้ำ ๆ พบในสัตว์ทุกชนิดที่มีระบบไหลเวียนซึ่งรวมสัตว์มีกระดูกสันหลังด้วยหัวใจสัตว์มีกระดูกสันหลังนั้นประกอบด้วยกล้ามเนื้อหัวใจ และเนื้อเยื่อเกี่ยวพันเป็นหลัก กล้ามเนื้อหัวใจเป็นกล้ามเนื้อลายที่อยู่นอกเหนืออำนาจจิตใจ พบเฉพาะที่หัวใจ และทำให้หัวใจสามารถสูบเลือดได้",
  },
  {
    header: "หัวใจ3",
    desc: "เป็นอวัยวะกล้ามเนื้อซึ่งสูบเลือดทั่วหลอดเลือดไปยังส่วนต่างๆของร่างกายโดยการหดตัวเป็นจังหวะซ้ำ ๆ พบในสัตว์ทุกชนิดที่มีระบบไหลเวียนซึ่งรวมสัตว์มีกระดูกสันหลังด้วยหัวใจสัตว์มีกระดูกสันหลังนั้นประกอบด้วยกล้ามเนื้อหัวใจ และเนื้อเยื่อเกี่ยวพันเป็นหลัก กล้ามเนื้อหัวใจเป็นกล้ามเนื้อลายที่อยู่นอกเหนืออำนาจจิตใจ พบเฉพาะที่หัวใจ และทำให้หัวใจสามารถสูบเลือดได้",
  },
]);

const setSwiperRef = (swiper) => {
  swiperRef2.value = swiper;
};
</script>

<style scoped>
.main-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.thumbs-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: auto;
}

.image-container img {
  width: 70%;
  height: auto;
}



</style>

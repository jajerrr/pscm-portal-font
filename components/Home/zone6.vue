<template>
  <div class="content-w-re mt-[5%] mb-[10%]">
    <div class="f-col f-center mb-[5%]">
      <h class="header">3D Learning object</h>
      <div class="flex-glow j-center w-full px-[10%]">
        <h class="th-header">วิทยาลัยสร้างสรรค์</h>
      </div>
      <IconsUnderline />
    </div>
    <div class="flex-container">
      <!-- Main Swiper -->
      <Swiper
        @swiper="setSwiperRef"
        class="main-swiper w-1-2-center h-auto container-z6 "
        style="width: 90%; height: 50%; margin-left: 5%; margin-top: 5vw; margin-right: 5%;"
        :modules="[Thumbs]"
        :slidesPerView="1"
        :allowTouchMove= "false"
      >
      <SwiperSlide
          class="card-container p-[5%]"
          v-for="(card, index) in detailCard"
          :key="index"
        >
          <div class="">
            <div class="carder-header-z6">{{ card.header }}</div>
            <div class="card-desc-z6">{{ card.desc }}</div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Thumbs Swiper -->
  <Swiper
    ref="swiperRef1"
    class="thumbs-swiper w-1-2-center h-auto"
     style="width: 90%; height: 50vh; "
    :modules="[Navigation, Thumbs]"
    :allowTouchMove= "false"
    :centeredSlides="true"
    :slidesPerView="1"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: swiperRef2 }"
  >
    <SwiperSlide
      class="i-center"
      v-for="(index) in detailCard"
      :key="index"
    >
      <div>
        <HomeModel  /> 
        
      </div>
    </SwiperSlide>
  </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Thumbs, Navigation } from "swiper/modules";
import { ref } from "vue";
import "swiper/swiper-bundle.css";
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
.flex-container {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 750px) {
  .flex-container {
    flex-direction: row;
  }
}

.main-swiper {
  order: 1;
}

.card-container {
  order: 2;
}

@media screen and (max-width: 750px) {
  .main-swiper {
    order: 2;
    text-transform: uppercase; /* ทำให้ตัวอักษรเป็นตัวใหญ่ */
    width: 80%;
  }

  .card-container {
    order: 1;
  }
}

.main-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
}

.thumbs-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
}

.image-container img {
  width: 50%;
  height: auto;
}

</style>


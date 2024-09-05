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
      <Swiper @swiper="setSwiperRef" class="main-swiper w-1-2-center h-auto container-z6 "
        style="height: 50%; margin-left: 10%; margin-top: 5vw; margin-right: 5%;" 
        :modules="[Thumbs , EffectFade]" 
        :effect="'fade'"
        :slidesPerView="1"
        :allowTouchMove="false"
        :fadeEffect="{ crossFade: true }" 
        :options="swiperOptions">
        
        <SwiperSlide class="card-container p-[10%]" 
                     v-for="(card, index) in detailCard" 
                     :key="index"
                     style="transition: transform 2s ease, opacity 1.5s ease;">
          <div>
            <div class="carder-header-z6">{{ card.header }}</div>
            <div class="card-desc-z6">{{ card.desc }}</div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Thumbs Swiper -->
      <Swiper ref="swiperRef1" class="thumbs-swiper w-1-2-center h-auto" style="width: 90%; height: 50vh; "
        :modules="[Navigation, Thumbs]" :allowTouchMove="false" :centeredSlides="true" :slidesPerView="1"
        :spaceBetween="10" :navigation="true"   
        :thumbs="{ swiper: swiperRef2 }"
        :options="swiperOptions" >
        
        <SwiperSlide class="i-center" 
                     v-for="(card, index) in detailCard" 
                     :key="index"
                     style="transition: transform 5s ease, opacity 4.5s ease;">
          <div>
            <HomeModl class="normal_model" />

            <!-- แสดงรูปภาพตามการเลือก -->
            <img 
              :src="getBodyImageSrc(card.img)" 
              class="small_model img-sm-z6"
              alt="body"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Thumbs, Navigation, EffectFade } from "swiper/modules";
import { ref } from "vue";
import "swiper/swiper-bundle.css";
import 'swiper/css/effect-fade';

const swiperRef1 = ref(null);
const swiperRef2 = ref(null);

const detailCard = ref([
  {
    header: "หัวใจ",
    desc: "เป็นอวัยวะกล้ามเนื้อซึ่งสูบเลือดทั่วหลอดเลือดไปยังส่วนต่างๆของร่างกายโดยการหดตัวเป็นจังหวะซ้ำ ๆ พบในสัตว์ทุกชนิดที่มีระบบไหลเวียนซึ่งรวมสัตว์มีกระดูกสันหลังด้วยหัวใจสัตว์มีกระดูกสันหลังนั้นประกอบด้วยกล้ามเนื้อหัวใจ และเนื้อเยื่อเกี่ยวพันเป็นหลัก กล้ามเนื้อหัวใจเป็นกล้ามเนื้อลายที่อยู่นอกเหนืออำนาจจิตใจ พบเฉพาะที่หัวใจ และทำให้หัวใจสามารถสูบเลือดได้",
    img: '/images/heart.svg'   
  },
  {
    header: "ตับ",
    desc: "เป็นอวัยวะกล้ามเนื้อซึ่งสูบเลือดทั่วหลอดเลือดไปยังส่วนต่างๆของร่างกายโดยการหดตัวเป็นจังหวะซ้ำ ๆ พบในสัตว์ทุกชนิดที่มีระบบไหลเวียนซึ่งรวมสัตว์มีกระดูกสันหลังด้วยหัวใจสัตว์มีกระดูกสันหลังนั้นประกอบด้วยกล้ามเนื้อหัวใจ และเนื้อเยื่อเกี่ยวพันเป็นหลัก กล้ามเนื้อหัวใจเป็นกล้ามเนื้อลายที่อยู่นอกเหนืออำนาจจิตใจ พบเฉพาะที่หัวใจ และทำให้หัวใจสามารถสูบเลือดได้",
    img: '/images/liver.svg'   
  },
  {
    header: "สมอง",
    desc: "เป็นอวัยวะกล้ามเนื้อซึ่งสูบเลือดทั่วหลอดเลือดไปยังส่วนต่างๆของร่างกายโดยการหดตัวเป็นจังหวะซ้ำ ๆ พบในสัตว์ทุกชนิดที่มีระบบไหลเวียนซึ่งรวมสัตว์มีกระดูกสันหลังด้วยหัวใจสัตว์มีกระดูกสันหลังนั้นประกอบด้วยกล้ามเนื้อหัวใจ และเนื้อเยื่อเกี่ยวพันเป็นหลัก กล้ามเนื้อหัวใจเป็นกล้ามเนื้อลายที่อยู่นอกเหนืออำนาจจิตใจ พบเฉพาะที่หัวใจ และทำให้หัวใจสามารถสูบเลือดได้",
    img: '/images/brain.svg'   
  },
]);

// ฟังก์ชันเพื่อคืนพาธของรูปภาพ
const getBodyImageSrc = (imgPath) => {
  return imgPath;  // ใช้พาธที่กำหนดไว้ใน array `detailCard`
};

const setSwiperRef = (swiper) => {
  swiperRef2.value = swiper;
};

const swiperOptions = {
  speed: 10000, // ความเร็วในการเปลี่ยนสไลด์ (หน่วยเป็นมิลลิวินาที)
  pagination: { clickable: true },
  navigation: true,
};
</script>

<style scoped>


.flex-container {
  display: flex;
  flex-direction: column;
}
.small_model{
  display: none
}

@media screen and (min-width: 750px) {
  .flex-container {
    flex-direction: row;
  }
}

.main-swiper {
  order: 2;
}

.card-container {
  order: 1;
}

@media screen and (max-width: 750px) {
  .main-swiper {
    order: 1;
    text-transform: uppercase;
    /* ทำให้ตัวอักษรเป็นตัวใหญ่ */
    width: 80%;
  }
  .small_model{
    display: flex;
  }
  .normal_model{
    display : none;
  }

  .card-container {
    order: 2;
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
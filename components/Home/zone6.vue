<template>
  <div class="content-w-re mt-[30%] mb-[20%]">
    <div class="f-col f-center mb-[5%]">
      <h class="header">3D Learning object</h>
      <div class="flex-glow j-center w-full px-[10%]">
        <h class="th-header">วิทยาลัยสร้างสรรค์</h>
      </div>
    
        <img src="assets/images/zone2/underline.png" class=" normal_model w-[30vw]" />

        <img src="assets/images/zone2/underline.png" class=" small_model w-[20rem]" />

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
<Swiper ref="swiperRef1" class="thumbs-swiper w-1-2-center h-auto" style="width: 90%; height: 50vh;"
  :modules="[Navigation, Thumbs]" :allowTouchMove="false" :centeredSlides="true" :slidesPerView="1"
  :spaceBetween="10" :navigation="true" :thumbs="{ swiper: swiperRef2 }" :options="swiperOptions">

  <SwiperSlide class="i-center" v-for="(card, index) in detailCard" :key="index"
    style="transition: transform 5s ease, opacity 4.5s ease;">
    
    <div>
      <!-- วนลูปไอคอนภายใน SwiperSlide -->
      <!-- <component
  v-for="(model, iIndex) in card.models" 
  :key="iIndex"
  :is="getIconComponent(model)"
  class="normal_model"
/> -->
     
      <img 
        :src="getBodyImageSrc(card.img)" 
        class="small_model img-sm-z6"
        alt="body"
      />
    </div>
  </SwiperSlide>
</Swiper>
    </div>
    <img src="/images/OBJECTS6.png" class="normal_model image-full-ab top-[-25%] left-[-5%] z-[-1]" style="
    width: 25vw;
   " />
   <img src="/images/OBJECTS6.png" class="small_model image-full-ab top-[-15%] left-[-5%] z-[-1]" style="
    width: 50vw;
   " />
   <img src="/images/vector6.png" class="normal_model image-full-ab top-[7%] right-[-2%] z-[-1]" style="
    width:46vw;
   " />
  </div>
</template>

<script setup>
import { Thumbs, Navigation, EffectFade } from "swiper/modules";
import { ref } from "vue";
import "swiper/swiper-bundle.css";
import 'swiper/css/effect-fade';
import { defineAsyncComponent } from 'vue';


const swiperRef1 = ref(null);
const swiperRef2 = ref(null);



// รายละเอียดของ card ที่ต้องการแสดง
const detailCard = ref([
  {
    header: "หัวใจ",
    desc: "เป็นอวัยวะกล้ามเนื้อซึ่งสูบเลือดทั่วหลอดเลือดไปยังส่วนต่างๆของร่างกายโดยการหดตัวเป็นจังหวะซ้ำ ๆ พบในสัตว์ทุกชนิดที่มีระบบไหลเวียนซึ่งรวมสัตว์มีกระดูกสันหลังด้วยหัวใจสัตว์มีกระดูกสันหลังนั้นประกอบด้วยกล้ามเนื้อหัวใจ และเนื้อเยื่อเกี่ยวพันเป็นหลัก กล้ามเนื้อหัวใจเป็นกล้ามเนื้อลายที่อยู่นอกเหนืออำนาจจิตใจ พบเฉพาะที่หัวใจ และทำให้หัวใจสามารถสูบเลือดได้",
    img: '/images/heart.svg',  
    models: ['Heart']  
  },
  {
    header: "ตับ",
    desc: "เป็นอวัยวะที่มีขนาดใหญ่ที่สุดในช่องท้อง อยู่ใต้กระดูกซี่โครงบริเวณชายโครงขวาเลยมาถึงลิ้นปี่ ปกติกล้ามเนื้อตับจะมีสีแดง หนักประมาณ 1.5 กิโลกรัม ในแต่ละวันเลือดในร่างกายของคนเราซึ่งมีอยู่ราวๆ 5 ลิตรจะไหลผ่านตับรอบแล้วรอบเล่าถึง 360 รอบ ซึ่งหากวัดปริมาณเลือดที่ผ่านตับก็จะมากถึงวันละ 1,800 ลิตรเลยทีเดียว",
    img: '/images/liver.svg',
    models: ['Liver']   
     },
  {
    header: "สมอง",
    desc: "เป็นอวัยวะที่มีความซับซ้อนที่ควบคุมความคิด ความจำ อารมณ์ การสัมผัส ทักษะด้านการเคลื่อนไหว การมองเห็น การหายใจ การควบคุมอุณหภูมิ ความหิว และกระบวนการอื่นๆในการควบคุมร่างกาย และสมองร่วมกับไขสันหลังที่รวมเรียกว่าระบบประสาทส่วนกลาง",
    img: '/images/brain.svg',
    models: ['Brain']   
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

//Dynamically import the icon components
const getIconComponent = (model) => {
  return defineAsyncComponent(() => import(`@/components/Model/${model}.vue`));
};
</script>

<style scoped>


.flex-container {
  display: flex;
  flex-direction: column;
}
.small_model{
  display: none;
}
.normal_model{
  display: flex;
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
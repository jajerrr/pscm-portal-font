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
    <div class="flex-container p-[5%]">
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
                     style="transition: transform 2s ease, opacity 0s ease;">
          <div>
            <div class="carder-header-z6">{{ card.header }}</div>
            <div class="card-desc-z6 scrollable-text">{{ card.desc }}</div>
            <button type="button"
            @click="openModel(card.models)"
          class=" f-center button-orange SF-TH text-[13px] px-[3%] py-[1%] ">
          ดูแบบ360°
        </button>
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
        class="normal_model"
        alt="body"
      />
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
<teleport to="body">
<div v-if="isModalOpen" class="modal-overlay" @click="closeModel">
      <div class="modal-content" @click.stop>
        <!-- Empty gray modal window content -->
        <p>Model 360</p>
        <component v-for="(model, iIndex) in selectedModels" 
                   :key="iIndex"
                   :is="getIconComponent(model)"
                   class=""
        />
        <button @click="closeModel" type="button"
                class="modal-close absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
      </div>
    </div>
  </teleport>


  </div>
</template>

<script setup>


// สร้างตัวแปรเพื่อเก็บสถานะการเปิด modal และโมเดลที่ถูกเลือก
const isModalOpen = ref(false);
const selectedModels = ref([]);

// ฟังก์ชันเปิด modal พร้อมกับรับ models
const openModel = (models) => {
  selectedModels.value = models; // รับ models จาก card
  isModalOpen.value = true;
};

// ฟังก์ชันปิด modal
const closeModel = () => {
  isModalOpen.value = false;
  selectedModels.value = [];
};

// ตรวจสอบการเปลี่ยนแปลงสถานะของ isModalOpen เพื่อเพิ่ม/ลบ class 'lock-scroll'
watch(isModalOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('lock-scroll');
  } else {
    document.body.classList.remove('lock-scroll');
  }
});



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
/* Modal overlay - covers the entire screen */
.lock-scroll {
    overflow: hidden;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.963); /* Gray background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal content */
/* .modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} */

.scrollable-text {
  max-height: 5.6em; 
  overflow-y: auto; 
  line-height: 1.5em;
  background: transparent; 
  border: none; 
 
}

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
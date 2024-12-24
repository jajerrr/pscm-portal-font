<template>
<<<<<<< Updated upstream
  <NuxtLayout name="map">
       
    
    <div class="right-5 absolute top-5 cursor-pointer z-50"> 
      
      <button 
        @click="toggleCard" 
        class="small_card px-4 py-2 bg-orange-500 hover:bg-[rgb(255,100,28)] text-white rounded-md">
        Show Card
      </button>
    </div>

   
    <div class="fixed"
        :style="{ left: parseInt((100 / 1920) * cal1vw()) + 'px', bottom: parseInt((20 / 1080) * cal1vh()) + 'px' }">
        <CardsCardCoverflow class="hide"/>
        <BuildingCardmobile v-if="showCard" class="small_card "/>
        <div class="w-full h-auto">
          <div class="flex items-center justify-left gap-4 hide">
      <button v-for="(button,index) in buttonname" :key="index" 
        type="button" 
        class="w-auto h-auto p-1   flex justify-center items-center Inter-Medium text-white focus:outline-none bg-[#00000034] rounded-3xl border hover:bg-[#4069A0] hover:text-gray-300 focus:bg-[#668fcdac]" 
        @click="navigateTo(button.path)">
        <img :src="getContentImageSrc(button.icons)"  class ="max-w-8 p-1"/>
        <div>{{ button.name }}</div>
      </button>
    </div>

    <div class="flex items-center justify-left gap-4  scrollable-container" v-if="showCard">
      <button v-for="(button,index) in buttonname" :key="index" 
        type="button" 
        class="w-auto h-auto p-1   flex justify-center items-center Inter-Medium text-white focus:outline-none bg-[#00000034] rounded-3xl border hover:bg-[#4069A0] hover:text-gray-300 focus:bg-[#668fcdac]" 
        @click="navigateTo(button.path)">
        <img :src="getContentImageSrc(button.icons)"  class ="max-w-8 p-1"/>
        <div>{{ button.name }}</div>
      </button>
    </div>

    
          
        </div>
      </div>

  </NuxtLayout>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRouter } from "vue-router";

// Button names
const buttonname = ref([
  {icons: '/images/building/Master_Line.png', name: 'interactive', path: ''},
  {icons: '/images/building/form 1.png', name: 'Quiz', path: ''},
  {icons: '/images/building/Test Tube.png', name: 'MMI', path: ''},
  {icons: '/images/building/Gamepad Minimalistic.png', name: 'Game', path: ''},
  {icons: '/images/building/Clapperboard Play.png', name: 'Video', path: ''},
  {icons: '/images/building/People Nearby.png', name: '360°', path: ''},
]);

const router = useRouter();
=======
  <div class="w-screen h-screen bg-red-300 relative">
  <div @click="resetClick" class="flex">
    <Swiper class="w-[30%] overflow-hidden bg-transparent p-5"
    style= "margin-left:-5% !important; margin-right:0 !important;"
      :modules="[SwiperEffectCoverflow, SwiperPagination, SwiperNavigation]" 
      :effect="'coverflow'" :grabCursor="true"
      :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 2,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }" :navigation="{
        prevEl: '.slidePrev-btn',
        nextEl: '.slideNext-btn'
      }" :loop="false" :pagination="false" @slideChange="onSlideChange">
      <!-- สร้าง SwiperSlide สำหรับการ์ดแต่ละใบ -->
      <SwiperSlide v-for="(card, index) in cards" :key="index" class="flex " @click.stop="toggleClick(index)"
        style="width: 40% !important">
        <div class="card_effect justify-center" :class="{ clicked: card.isClicked }"
          :style="{ backgroundImage: `url(${card.backgroundImage})` }">
          <h4 v-if="card.isClicked" class="">{{ card.title }}</h4>
          <p v-if="card.isClicked" class="scrollable-text">{{ card.description }}</p>
          <div class="shine"></div>
          <div class="background">
            <div class="tiles">
              <div class="tile tile-1"></div>
              <div class="tile tile-2"></div>
              <div class="tile tile-3"></div>
              <div class="tile tile-4"></div>
              <div class="tile tile-5"></div>
              <div class="tile tile-6"></div>
              <div class="tile tile-7"></div>
              <div class="tile tile-8"></div>
              <div class="tile tile-9"></div>
              <div class="tile tile-10"></div>
            </div>
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>

      </SwiperSlide>
      <SwiperController />

      <div class="slide-arrow slide-arrow__prev slidePrev-btn ml-[20%]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="slide-arrow slide-arrow__next slideNext-btn mr-[20%]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

    </Swiper>

    <!-- Card Description Section -->
    <div class="w-[50%] p-5 flex items-center SF-TH">
      <div class="bg-transparent p-6">
        <h2 class="text-2xl  text-[#37629B] font-bold mb-4">{{ cards[activeIndex].title }}</h2>
        <img src="assets/images/map-content/line.png" alt="Card Image" class="w-[40%] ml-[-3%] mb-4" />
        <p class="text-gray-700 mb-4 w-[35%] scrollable-text">{{ cards[activeIndex].description }}</p>
        <button
          class="mt-4 px-4 py-2 \ bg-orange-500 hover:bg-[rgb(255,100,28)] text-white rounded-md"
          @click="onButtonClick(activeIndex)"
        >
          เข้าชมห้อง
        </button>
      </div>
    </div>

  </div>
  <div class="flex absolute bottom-3 left-10 z-[20] hide">
      <button v-for="(button,index) in buttonname" :key="index" 
        type="button" 
        class="flex items-center justify-center gap-5 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-[#00000034] rounded-3xl border hover:bg-[#4069A0] hover:text-gray-300 focus:bg-[#668fcdac]" 
        @click="">
        <img :src="getContentImageSrc(button.icons)" />
        <div>{{ button.name }}</div>
      </button>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
// Button names
const buttonname = ref([
  {icons: '/images/building/Master_Line.png', name: 'interactive', id:1 },
  {icons: '/images/building/form 1.png', name: 'Quiz',id:2  },
  {icons: '/images/building/Test Tube.png', name: 'MMI',id:3  },
  {icons: '/images/building/Gamepad Minimalistic.png', name: 'Game', id:4 },
  {icons: '/images/building/Clapperboard Play.png', name: 'Video',id:5 },
  {icons: '/images/building/People Nearby.png', name: '360°',id:6 },
]);

>>>>>>> Stashed changes

const getContentImageSrc = (imgPath) => {
  return imgPath;  // ใช้พาธที่กำหนดไว้ใน array
};
<<<<<<< Updated upstream

// Function to navigate
function navigateTo(path) {
  router.push(path);
}

// State to control the visibility of the component
const showCard = ref(false);

// Toggle visibility
const toggleCard = () => {
  showCard.value = !showCard.value;
};

// Watch for changes in showCard and handle body scroll
watch(showCard, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'; // Disable scroll
  } else {
    document.body.style.overflow = ''; // Enable scroll
=======
// กำหนดข้อมูลของการ์ด
const cards = reactive([
  {
    title: "Products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/cat2.jpg",
  },
  
  {
    title: "Categories",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/card.jpg",
  },
  {
    title: "Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    isClicked: false,
    backgroundImage: "/images/cat.jpg",
  },
]);
// เก็บ index ของสไลด์ที่ active
const activeIndex = ref(0);

let previousActiveIndex = 0; // เก็บ index ของสไลด์ก่อนหน้า

// ฟังก์ชันเมื่อมีการเปลี่ยนสไลด์
function onSlideChange(swiper) {
  if (previousActiveIndex !== swiper.realIndex) {
    cards[previousActiveIndex].isClicked = false;
    previousActiveIndex = swiper.realIndex;
>>>>>>> Stashed changes
  }
});

// Clean up when unmounted
onUnmounted(() => {
  document.body.style.overflow = ''; // Ensure scroll is re-enabled
});


const cal1vh = () => {
  return window.innerHeight;
}

const cal1vw = () => {
  return window.innerWidth;
}

const widthCal = ref(0);
const heightCal = ref(0);

onMounted(() => {
  widthCal.value = parseInt(190 / 1920 * cal1vw());
  heightCal.value = parseInt(190 / 1080 * cal1vh());
  console.log(widthCal.value, heightCal.value)

  window.addEventListener('resize', updateDimensions);
});

const updateDimensions = () => {
  widthCal.value = parseInt(190 / 1920 * cal1vw());
  heightCal.value = parseInt(190 / 1080 * cal1vh());
}
</script>

<style scoped>
.small_card {
  display: none;
}

.scrollable-container {
  width:90%;     
  overflow-x: auto;     
  overflow-y: hidden;   
  display: flex;        
  flex-direction: row; 
  gap: 10px;
  background: transparent;
  border: none;
  
}

@media (max-width: 1200px){
  .hide {
    display: none;
  }

  .small_card{
    display: flex;
  }
}
</style>

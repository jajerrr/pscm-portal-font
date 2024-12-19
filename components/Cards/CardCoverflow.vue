<template>
  <div >
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
  </div>
</template>

<script setup>
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
  }
  activeIndex.value = swiper.realIndex; // อัปเดต index ที่ active
}

// ฟังก์ชัน toggle สำหรับการคลิกการ์ด
function toggleClick(index) {
  if (index === activeIndex.value) {
    cards.forEach((card) => (card.isClicked = false));
    cards[index].isClicked = true;
  }
}

// ฟังก์ชันเมื่อคลิกปุ่มใน Card Description
function onButtonClick(index) {
  alert(`You clicked on card: ${cards[index].title}`);
}

function resetClick() {
  cards.forEach((card) => (card.isClicked = false));
}
</script>



<style scoped>


.scrollable-text {
  max-height: 5.6em;
  overflow-y: auto;
  line-height: 1.5em;
  background: transparent;
  border: none;
  scrollbar-width: none;
  /* สำหรับ Firefox */
}

.scrollable-text::-webkit-scrollbar {
  display: none;
  /* สำหรับ Chrome, Safari */
}

.card_effect {
  background-size: cover;
  background-position: center;
  height: 200px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;
}

.slide-arrow {
  position: absolute;
  display: block;
  z-index: 10;
  top: 50%;
  line-height: 1;
  cursor: pointer;
}

.slide-arrow:hover {
  opacity: 0.6;
}

.slide-arrow__prev {
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d8d8d8;
  border: 2px solid #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

}

.slide-arrow__next {
  right: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d8d8d8;
  border: 2px solid #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

}

.slide-arrow.swiper-button-disabled {
  display: none;
}

:root.toggle .grid * {
  transition-duration: 0s !important;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-gap: 32px;
  position: relative;
  z-index: 1;
}

.card_effect {
  background-size: cover;
  background-position: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  padding: 56px 16px 16px 16px;
  height: 350px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;
}

.card_effect::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.015);
}

.card_effect .icon {
  z-index: 2;
  position: relative;
  display: table;
  padding: 8px;
}

.card_effect .icon::after {
  content: "";
  position: absolute;
  inset: 4.5px;
  border-radius: 50%;
  background-color: var(--card-icon-background-color);
  border: 1px solid var(--card-icon-border-color);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  transition: background-color 0.25s, border-color 0.25s;
}

.card_effect h4 {
  z-index: 1;
  position: relative;
  margin: 12px 0 4px 0;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  color: #ffffff;
}

.card_effect p {
  z-index: 1;
  position: relative;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: #a1a1aa;
}

.card_effect .shine {
  border-radius: inherit;
  position: absolute;
  background-color: #000000d5;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s;
}

.card_effect .shine:before {
  content: "";
  width: 150%;
  padding-bottom: 150%;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 55%;
  filter: blur(20px);
  opacity: 0.1;
  transform: translateX(-50%);
  background-image: conic-gradient(from 205deg at 50% 50%,
      rgb(16, 185, 129) 0deg,
      #10b981 25deg,
      rgba(52, 211, 153, 0.18) 295deg,
      rgba(16, 185, 129, 0) 360deg);
}

.card_effect .background {
  border-radius: inherit;
  position: absolute;
  inset: 0;
  overflow: hidden;
  -webkit-mask-image: radial-gradient(circle at 60% 5%,
      black 0%,
      black 15%,
      transparent 60%);
  mask-image: radial-gradient(circle at 60% 5%,
      black 0%,
      black 15%,
      transparent 60%);
}

.card_effect .background .tiles {
  opacity: 0;
  transition: opacity 0.25s;
}

.card_effect .background .tiles .tile {
  position: absolute;
  background-color: rgba(16, 185, 129, 0.328);
  -webkit-animation-duration: 8s;
  animation-duration: 8s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  opacity: 0;
}

.card_effect .background .tiles .tile.tile-4,
.card_effect .background .tiles .tile.tile-6,
.card_effect .background .tiles .tile.tile-10 {
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

.card_effect .background .tiles .tile.tile-3,
.card_effect .background .tiles .tile.tile-5,
.card_effect .background .tiles .tile.tile-8 {
  -webkit-animation-delay: -4s;
  animation-delay: -4s;
}

.card_effect .background .tiles .tile.tile-2,
.card_effect .background .tiles .tile.tile-9 {
  -webkit-animation-delay: -6s;
  animation-delay: -6s;
}

.card_effect .background .tiles .tile.tile-1 {
  top: 0;
  left: 0;
  height: 10%;
  width: 22.5%;
}

.card_effect .background .tiles .tile.tile-2 {
  top: 0;
  left: 22.5%;
  height: 10%;
  width: 27.5%;
}

.card_effect .background .tiles .tile.tile-3 {
  top: 0;
  left: 50%;
  height: 10%;
  width: 27.5%;
}

.card_effect .background .tiles .tile.tile-4 {
  top: 0;
  left: 77.5%;
  height: 10%;
  width: 22.5%;
}

.card_effect .background .tiles .tile.tile-5 {
  top: 10%;
  left: 0;
  height: 22.5%;
  width: 22.5%;
}

.card_effect .background .tiles .tile.tile-6 {
  top: 10%;
  left: 22.5%;
  height: 22.5%;
  width: 27.5%;
}

.card_effect .background .tiles .tile.tile-7 {
  top: 10%;
  left: 50%;
  height: 22.5%;
  width: 27.5%;
}

.card_effect .background .tiles .tile.tile-8 {
  top: 10%;
  left: 77.5%;
  height: 22.5%;
  width: 22.5%;
}

.card_effect .background .tiles .tile.tile-9 {
  top: 32.5%;
  left: 50%;
  height: 22.5%;
  width: 27.5%;
}

.card_effect .background .tiles .tile.tile-10 {
  top: 32.5%;
  left: 77.5%;
  height: 22.5%;
  width: 22.5%;
}

@-webkit-keyframes tile {

  0%,
  12.5%,
  100% {
    opacity: 1;
  }

  25%,
  82.5% {
    opacity: 0;
  }
}

@keyframes tile {

  0%,
  12.5%,
  100% {
    opacity: 1;
  }

  25%,
  82.5% {
    opacity: 0;
  }
}

.card_effect .background .line {
  position: absolute;
  width: 80%;
  /* หรือปรับตามขนาดที่ต้องการ */
  height: 2px;
  /* ทำให้เป็นสี่เหลี่ยมบาง */

  left: 10%;
  /* ตรงกลางการ์ด */
  top: 50%;
  /* ปรับตำแหน่งตามที่ต้องการ */
  opacity: 0;
  transition: opacity 0.35s;
}

.card_effect .background .line {
  position: absolute;
  width: 80%;
  /* ปรับให้เป็นสี่เหลี่ยมแนวนอน */
  height: 2px;

  left: 10%;
  top: 50%;
  opacity: 0;
  transition: opacity 0.35s;
}

.card_effect .background .line.line-1 {
  width: 80%;
  height: 2px;
  left: 10%;
  top: 30%;
  /* ปรับตำแหน่งให้เหมาะสม */
}

.card_effect .background .line.line-2 {
  width: 2px;
  /* สร้างเส้นสี่เหลี่ยมแนวตั้ง */
  height: 80%;
  left: 50%;
  top: 10%;
}

/* ลบส่วนการปรับ scale และ transform-origin ออก */
.card_effect .background .line:before,
.card_effect .background .line:after {
  display: none;
}

.card_effect.clicked {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.04), 0px 15px 25px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.card_effect.clicked .icon::after {
  background-color: var(--card-hover-icon-background-color);
  border-color: var(--card-hover-icon-border-color);
}

.card_effect.clicked .icon svg {
  color: var(--card-hover-icon-color);
}

.card_effect.clicked .shine {
  opacity: 1;
  transition-duration: 0.5s;
  transition-delay: 0s;
}

.card_effect.clicked .background .tiles {
  opacity: 1;
  transition-delay: 0.25s;
}

.card_effect.clicked .background .tiles .tile {
  -webkit-animation-name: tile;
  animation-name: tile;
}

.card_effect.clicked .background .line {
  opacity: 1;
  transition-duration: 0.15s;
}

.card_effect.clicked .background .line:before {
  transform: scaleX(1);
}

.card_effect.clicked .background .line:after {
  transform: scaleY(1);
}

.card_effect.clicked .background .line.line-1:before,
.card_effect:hover .background .line.line-1:after {
  transition-delay: 0s;
}

.card_effect.clicked .background .line.line-2:before,
.card_effect:hover .background .line.line-2:after {
  transition-delay: 0.15s;
}

.card_effect.clicked .background .line.line-3:before,
.card_effect:hover .background .line.line-3:after {
  transition-delay: 0.3s;
}
</style>

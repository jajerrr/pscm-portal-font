<template >
  <div @click="resetClick ">
  <Swiper 
    class="w-[50%] overflow-hidden bg-[#ffffff]"
    :modules="[SwiperEffectCoverflow, SwiperPagination]" 
    :effect="'coverflow'"
    :grabCursor="true" 
    :centeredSlides="true" 
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 0,
      stretch: 10,
      depth: 100,
      modifier: 3,
      slideShadows: true
    }" 
    :pagination="true" 
    :loop="flase"
  >
    <!-- สร้าง SwiperSlide สำหรับการ์ดแต่ละใบ -->
    <SwiperSlide 
      v-for="(card, index) in cards" 
      :key="index" 
      class="flex" 
       @click.stop="toggleClick(index)"
      style="width: 30% !important;"
    >
    
      <div class="card_effect  justify-center" :class="{ 'clicked': card.isClicked }">
        
        <!-- แสดง title และ description เมื่อคลิก -->
        <img :src="getImageSrc(card.card_img)" 
        class="bg-coverw-full  -full"/>
        <h4 v-if="card.isClicked">{{ card.title }}</h4>
        <p v-if="card.isClicked">{{ card.description }}</p>

        

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

    <!-- Swiper controls เช่น pagination -->
   
  </Swiper>
</div>
</template>

<script setup>  
// กำหนดข้อมูลของการ์ด
const cards = reactive([
  { card_img:'/images/img124.jpg' , title: 'Products', description: 'This is the Products card.', isClicked: false },
  { card_img:'/images/img123.jpg' , title: 'Categories', description: 'This is the Categories card.', isClicked: false },
  { card_img:'/images/img124.jpg' , title: 'Services', description: 'This is the Services card.', isClicked: false },
  { card_img:'/images/img123.jpg' , title: 'Products', description: 'This is the Products card.', isClicked: false },
  { card_img:'/images/img124.jpg' , title: 'Categories', description: 'This is the Categories card.', isClicked: false },
  { card_img:'/images/img123.jpg' , title: 'Services', description: 'This is the Services card.', isClicked: false },

]);

const getImageSrc = (imgPath) => {
  return imgPath;  
};

// ฟังก์ชัน toggle สำหรับการคลิกการ์ด
function toggleClick(index) {
if (cards[index].isClicked) {
  // ถ้าคลิกการ์ดเดิมอีกครั้ง จะรีเซ็ต
  cards[index].isClicked = false;
} else {
  // ถ้าเป็นการคลิกการ์ดใหม่ จะปิดการคลิกของการ์ดอื่นแล้วเปิดการ์ดที่เลือก
  cards.forEach(card => (card.isClicked = false));
  cards[index].isClicked = true;
}
}

// ฟังก์ชันรีเซ็ตทั้งหมดเมื่อคลิกนอกการ์ด
function resetClick() {
cards.forEach(card => (card.isClicked = false));
}
</script>

<style scoped>

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
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.05), 
  0px 15px 25px  rgba(0, 0, 0, 0.3), 
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
  background-color: rgba(255, 255, 255, .015);
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
  color: #FFFFFF;
}
.card_effect p {
  z-index: 1;
  position: relative;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: #A1A1AA;
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
  background-image:conic-gradient(from 205deg at 50% 50%, rgb(16, 185, 129) 0deg, #10B981 25deg, rgba(52, 211, 153, 0.18) 295deg, rgba(16, 185, 129, 0) 360deg);
}
.card_effect .background {
  border-radius: inherit;
  position: absolute;
  inset: 0;
  overflow: hidden;
  -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
  mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
}
.card_effect .background .tiles {
  opacity: 0;
  transition: opacity 0.25s;
}
.card_effect .background .tiles .tile {
  position: absolute;
  background-color:  rgba(16, 185, 129, 0.328);
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
  0%, 12.5%, 100% {
    opacity: 1;
  }
  25%, 82.5% {
    opacity: 0;
  }
}
@keyframes tile {
  0%, 12.5%, 100% {
    opacity: 1;
  }
  25%, 82.5% {
    opacity: 0;
  }
}
.card_effect .background .line {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.35s;
}
.card_effect .background .line:before, 
.card_effect .background .line:after {
  content: "";
  position: absolute;
  background-color: #2A2B2C;
  transition: transform 0.35s;
}
.card_effect .background .line:before {
  left: 0;
  right: 0;
  height: 1px;
  transform-origin: 0 50%;
  transform: scaleX(0);
}
.card_effect .background .line:after {
  top: 0;
  bottom: 0;
  width: 1px;
  transform-origin: 50% 0;
  transform: scaleY(0);
}
.card_effect .background .line.line-1:before {
  top: 10%;
}
.card_effect .background .line.line-1:after {
  left: 22.5%;
}
.card_effect .background .line.line-1:before, 
.card_effect .background .line.line-1:after {
  transition-delay: 0.3s;
}
.card_effect .background .line.line-2:before {
  top: 32.5%;
}
.card_effect .background .line.line-2:after {
  left: 50%;
}
.card_effect .background .line.line-2:before, 
.card_effect .background .line.line-2:after {
  transition-delay: 0.15s;
}
.card_effect .background .line.line-3:before {
  top: 55%;
}
.card_effect .background .line.line-3:after {
  right: 22.5%;
}
.card_effect.clicked {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.04), 
  0px 15px 25px  rgba(0, 0, 0, 0.3), 
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

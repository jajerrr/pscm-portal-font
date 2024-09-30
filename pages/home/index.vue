<template>
  <div class = "" style="
    display: flex;
    flex-direction: column-reverse;">
    <div class="swiper-container gallery-top w-1/2">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(image, index) in topImages"
          :key="index"
        >
          <img 
            :src="getTopImageSrc(image.top)" 
            alt="top"
            class="top-image"
          />
        </div>
      </div>
    </div>
    <div class="swiper-container gallery-thumbs w-1/2 f-row">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(image, index) in thumbImages"
          :key="index"
        >
          <img 
            :src="getThumbImageSrc(image.thumb)" 
            alt="thumb"
            class="thumb-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

// Reactive state
const topImages = ref([
  { top: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { top: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { top: 'https://swiperjs.com/demos/images/nature-3.jpg' },
  
]);
const thumbImages = ref([
  { thumb: 'https://swiperjs.com/demos/images/nature-1.jpg' },
  { thumb: 'https://swiperjs.com/demos/images/nature-2.jpg' },
  { thumb: 'https://swiperjs.com/demos/images/nature-3.jpg' },

]);

let galleryThumbs = null;
let galleryTop = null;

// Initialize Swiper
const initializeSwiper = () => {
  galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    
  });

  galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    allowTouchMove: false,
    thumbs: {
      swiper: galleryThumbs,
    },
  });
};

// Lifecycle hook
onMounted(() => {
  initializeSwiper();
});

// Image source methods
const getTopImageSrc = (image) => image; // Return the image URL directly
const getThumbImageSrc = (image) => image; // Return the image URL directly
</script>

<style scoped>
html,

body {
  background: #000;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.gallery-top {
  height: 20%;
  width: 100%;
}
.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
.top-image,
.thumb-image {
  width: 100%; /* Ensure images are responsive */
  height: auto; /* Maintain aspect ratio */
}
</style>

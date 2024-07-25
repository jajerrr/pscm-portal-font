<script setup lang="ts">
import 'swiper/swiper-bundle.css'

const items = [
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
]
</script>

<template>
  <Swiper
  :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
            :slides-per-view="1"
            :loop="false"
            :navigation="false"
            class="w- mx-auto"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
            
            :pagination="{
              el: '.swiper-pagination',
              clickable: true,
            }"
          >
    <SwiperSlide v-for="(item, index) in items" :key="index">
      <img :src="item" >
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-button-next, .swiper-button-prev {
  color: black;
}
</style>

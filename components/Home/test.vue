<template>
  <div class="content-w-re">
    <div class="f-center f-col mb-[10%]">
      <h class="header">Ranking</h>
      <div class="f-center flex-glow w-full px-[10%]">
        <h class="th-header">จัดอันดับคะแนน</h>
      </div>
      <IconsUnderline />
      <div class="flex w-screen relative ">
        <Swiper
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :spaceBetween="0"
          :loop="false"
        >
          <!-- <div class="swiper-wrapper"> -->
          <SwiperSlide v-for="(card, index) in cards" :key="index">
            <div class="card">
              <img :src="card.image" alt="Card image" />
              <div class="card-content">
                <h3>{{ card.title }}</h3>
                <p>{{ card.description }}</p>
              </div>
            </div>
          </SwiperSlide>
          <!-- </div> -->
         
       
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>

const cards = ref([
  { image: 'https://via.placeholder.com/300', title: 'Card 1', description: 'This is card 1' },
  { image: 'https://via.placeholder.com/300', title: 'Card 2', description: 'This is card 2' },
  { image: 'https://via.placeholder.com/300', title: 'Card 3', description: 'This is card 3' },
  { image: 'https://via.placeholder.com/300', title: 'Card 4', description: 'This is card 4' },
  { image: 'https://via.placeholder.com/300', title: 'Card 5', description: 'This is card 5' },
  { image: 'https://via.placeholder.com/300', title: 'Card 6', description: 'This is card 6' },

])
</script>

<style>

.swiper-container {
  width: 100%;
  padding: 20px 0;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.card {
  width: 100%;
  max-width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
}


.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}

.card-content p {
  margin: 0;
  color: #666;
}
</style>

<!-- <template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(card, index) in cards" :key="index">
        <div class="card">
          <img :src="card.image" alt="Card image">
          <div class="card-content">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swiper, { Pagination } from 'swiper'


const cards = ref([
  { image: 'https://via.placeholder.com/300', title: 'Card 1', description: 'This is card 1' },
  { image: 'https://via.placeholder.com/300', title: 'Card 2', description: 'This is card 2' },
  { image: 'https://via.placeholder.com/300', title: 'Card 3', description: 'This is card 3' },
])

onMounted(() => {
  new Swiper('.swiper-container', {
    modules: [SwiperPagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  })
})
</script>

<style scoped>
.swiper-container {
  width: 100%;
  padding: 20px 0;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.card {
  width: 100%;
  max-width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}

.card-content p {
  margin: 0;
  color: #666;
}
</style> -->

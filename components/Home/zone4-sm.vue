<template>
  <div class="content-w-re">
    <div class="f-center f-col mb-[10%]">
      <h class="header">Ranking</h>
      <div class="f-center flex-glow w-full px-[10%]">
        <h class="th-header">จัดอันดับคะแนน</h>
      </div>
      <IconsUnderline />
      <div class="flex w-screen relative m-[10%]">
        <Swiper
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :spaceBetween="10"
        >
          <!-- <div class="swiper-wrapper"> -->
          <SwiperSlide v-for="(card, index) in cards" :key="index" style="width: 50%;">
            <div class="card">
              <img src="assets/images/zone4/rank-img.svg" alt="Card image" class="p-[10%]" />
              <div class="card-content">
                <h3>{{ card.name }}</h3>
                <div class="inline-content">
              <img src="assets/images/zone4/coin 9.svg" class="small-image"/>
              <p>{{ card.score }}</p>
            </div>
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
  {
    num: 1,
    name: "Nuttida P.",
    score: "999",
    image: "https://via.placeholder.com/300",
  },

      {
    num: 2,
    name: "Nuttida P.",
    score: "999",
    image: "https://via.placeholder.com/300"},
    {
    num: 3,
    name: "Nuttida P.",
    score: "999",
    image: "https://via.placeholder.com/300"},
    {
    num: 4,
    name: "Nuttida P.",
    score: "999",
    image: "https://via.placeholder.com/300"},
    {
    num: 5,
    name: "Nuttida P.",
    score: "999",
    image: "https://via.placeholder.com/300"},
    
]);
</script>

<style>



.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card {
  width: 100%;
  max-width: 200px;
  background: #fff;
  border-radius: 10px;
}

.card img {
  width: 100%;
  height: 20%;
  object-fit: cover;
}

.card-content {
  padding: 10px;
  justify-items: center;
}

.card-content h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}

.card-content p {
  margin: 0;
  color: #FF7A00;
}

.inline-content {
  display: flex;
  align-items: center;
}

.inline-content .small-image {
  width: 40px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px;
}
</style>

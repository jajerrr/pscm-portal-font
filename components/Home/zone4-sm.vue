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
          :spaceBetween="15"
        >
          <SwiperSlide
            v-for="(card, index) in cards"
            :key="index"
            style="width: 50%"
          >
          <div class="flex items-center">
            <h class="num-rank-sm">{{ card.num }}</h>
            <div class="card  ml-[-13%] mt-[15vw]">
              
              <img
                :src="getImageSrc(card.image)"
                alt="Card image"
                class="p-[10%]"
              />
              <div class="card-content">
                <h3 class="name">{{ card.name }}</h3>
                <div class="inline-content">
                  <img
                    src="assets/images/zone4/coin 9.svg"
                    class="small-image"
                  />
                  <p class="score-sm">{{ card.score }}</p>
                </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Navigation } from 'swiper/modules';

const cards = ref([
  {
    num: 1,
    name: "Nuttida P.",
    score: "999",
    image: "/images/zone4/Group 1000003302.svg",
  },

  {
    num: 2,
    name: "Nuttida A.",
    score: "998",
    image: "/images/zone4/Group 1000003303.svg",
  },
  {
    num: 3,
    name: "Nuttida B.",
    score: "997",
    image: "/images/zone4/Group 1000003304.svg",
  },
  {
    num: 4,
    name: "Nuttida C.",
    score: "996",
    image: "/images/zone4/Group 1000003305.svg",
  },
  {
    num: 5,
    name: "Nuttida D.",
    score: "995",
    image: "/images/zone4/Group 1000003306.svg",
  },
]);

// ฟังก์ชันเพื่อคืนพาธของรูปภาพ
const getImageSrc = (imagePath) => {
  return imagePath;  // ใช้พาธที่กำหนดไว้ใน array `detailCard`
};
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
  padding: 10%;
  justify-items: center;
  margin-left: 5%;
}

.card-content h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}

.card-content p {
  margin: 0;
  color: #ff7a00;
}

.inline-content {
  display: flex;
  align-items: center;
}

.inline-content .small-image {
  width: 40px;
  height: auto;
  margin-right: 10px;
}
</style>

<template>
  <div class="content-w-re mb-[15%]">
    <div class="f-col f-center mb-[15%] mt-[5%]">
      <h class="header">Our service</h>
      <h1 class="th-header text-[2vw]">บริการของเรา</h1>
      <IconsUnderline />
    </div>

    <!----------------------------------------------------  card service  --------------------------------------------------------->
    <div class="f-center">
      <div class="f-row  card-container">
          <Swiper
          :modules="[SwiperPagination]"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :pagination="true"

      >
      <SwiperSlide class="relative  mx-[10px] card-item"
          v-for="(card, index) in serviceCard"
          :key="index">
          <div class="container-z7">
            <IconsZone7-1 v-if="card.icon == 1" />
            <IconsZone7-2 v-if="card.icon == 2" />
            <IconsZone7-1 v-if="card.icon == 3" />

            <div class="card-head-z7">{{ card.header }}</div>
            <div class="card-desc-z7">{{ card.desc }}</div>
           
            <div class="flex">
              <IconsAllowupright class="left-[75%]" />
            </div>
          
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
  
    </div>
  </div>
</template>

<script setup>
const serviceCard = ref([
  {
    icon: 1,
    header: "บริการทางการศึกษา",
    desc: "ผลิตบัณฑิตที่มีความเป็นเลิศด้านวิชาการและวิชาชีพพร้อมบริการสังคมด้วยความรู้ความชำนาญคุณธรรมจริยธรรมและความมุ่งมั่น",
  },
  {
    icon: 2,
    header: "บริการทางการแพทย์และสาธารณะสุข",
    desc: "ทุกชีวิตของคนไข้คือหัวใจของเรา",
  },
  {
    icon: 3,
    header: "งานวิจัย นวัตกรรม และความร่วมมือ",
    desc: "บูรณาการงานวิจัยและเทคโนโลยีสู่นวัตกรรมเพื่อเศรษฐกิจสังคมและคุณภาพชีวิตที่ดีของประชาชน",
  },
]);
</script>

<style scoped>

.swiper-slide {
display: flex;
justify-content: center;
align-items: center;
height: 100%;
}

.swiper-pagination {
  position: absolute;
  bottom: -10px; /* ปรับเปลี่ยนตำแหน่งตามต้องการ */
  left: 50%;
  transform: translateX(-50%);
}
.swiper-pagination-bullet {
  background-color: #ff0000; /* เปลี่ยนสีตามต้องการ */
}

.swiper-pagination-bullet-active {
  background-color: #00ff00; /* เปลี่ยนสีของจุดที่ active */
}



</style>

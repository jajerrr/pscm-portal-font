<template>

  <div class="main-content second-main-content">

    <div class="col-center mt-[10%]" id="zone2">
      <h class="header">News</h>
      <div class="f-center flex-glow w-full relative small-view">
        <h1 class=" th-header">ข่าวสารประชาสัมพันธ์</h1>
        <div class="sm-icon">
          <img src="assets/images/zone2/underline.png" class="no-style" />
        </div>
        <button type="button"
          class="absolute f-center button-orange right-[5%] SF-TH text-[15px] px-[3%] py-[1%] space-x-2 small-button">
          <span>ดูทั้งหมด</span>

          <img src="assets/images/zone2/arrowup.png" class="w-[1.5vw] nm-icon" />


        </button>
      </div>
      <div class="icons-underline-normal">
        <img src="assets/images/zone2/underline.png" class="w-[35vw]" />
      </div>

    </div>

    <img src="assets/images/zone2/Vector 88.svg" class="image-ab w-[35%] mt-[-40px] hide" />




    <!-------------------------------------------------- คอนเทนเนอร์ image  -------------------------------------->

    <div class="f-center">
      <div v-for="(left, index) in mainContentData" :key="index" class="f-row gap-[5%] mt-[5%] card-container p-[5%] ">

        <div class="f-col content-w-re card-item hide" id="zone2-2">


          <div class="content-re SF-TH">
            <img :src="getContentImageSrc(left.img)" class="image-full w-[80%]" />
            <div class="f-col gap-3 absolute mt-[40%] p-[5%]">
              <p class="bt-orange hide">มาใหม่ล่าสุด</p>
              <div class="i-center sm-icon">
                <img src="assets/images/zone2/calendar.png" class="w-[1vw]" />
                <p class="text-[15px]  px-2 text-white">{{ left.date }}</p>
              </div>
              <div class="text-container">
                <p class="text-[15px] SF-TH-Semi text-white text-ellipsis">
                  {{ left.content }}
                </p>
              </div>
              <div class="i-center nm-icon">
                <img src="assets/images/zone2/calendar.png" class="w-[1.5vw]" />
                <p class="text-[15px]  px-2 text-white">{{ left.date }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- คอนเทนเนอร์ right image  -->

        <div class="f-col image-full gap-7 SF-TH card-item" id="zone2-3">
          <div class="i-center gap-10 card-item-order sm-icon">
            <img :src="getContentImageSrc(left.img)" class="w-[30%] h-auto rounded-[20%]" alt="news image1" />
            <div class="f-col gap-3 sm-text">
              <p class="new-bt hide">มาใหม่ล่าสุด</p>
              <div class="i-center sm-icon">
                <img src="assets/images/zone2/calender_right.png" class="calender-style" />
                <p class="z-2-date">{{ left.date }}</p>
              </div>
              <div class="text-container">
                <p class="z-2-text text-ellipsis">
                  {{ left.content }}
                </p>
              </div>
              <div class="i-center nm-icon">
                <img src="assets/images/zone2/calender_right.png" class="w-[1.5vw]" />
                <p class="z-2-date">{{ left.date }}</p>
              </div>
            </div>
          </div>

          <div v-for="(right, index) in rightContentData" :key="index" class="i-center gap-10 card-item-order">
            <img :src="getContentImageSrc(right.img)" class="w-[30%] h-auto" alt="image" />
            <div class="f-col gap-3 sm-text">
              <p class="new-bt hide">มาใหม่ล่าสุด</p>
              <div class="i-center sm-icon">
                <img src="assets/images/zone2/calender_right.png" class="calender-style" />
                <p class="z-2-date">{{ right.date }}</p>
              </div>
              <div class="text-container">
                <p class="z-2-text text-ellipsis">
                  {{ right.content }}
                </p>
              </div>
              <div class="i-center nm-icon">
                <img src="assets/images/zone2/calender_right.png" class="w-[1.5vw]" />
                <p class="z-2-date">{{ right.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const rightContentData = ref([
  { img: "/images/image 1560.jpg", date: "24 พ.ค. 2567", content: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observershipสำหรับนักศึกษาแพทย์จากญี่ปุ่น" },
  { img: "/images/image 1560.jpg", date: "25 พ.ค. 2567", content: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observershipสำหรับนักศึกษาแพทย์จากญี่ปุ่น" },
  { img: "/images/image 1560.jpg", date: "26 พ.ค. 2567", content: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observershipสำหรับนักศึกษาแพทย์จากญี่ปุ่น" },
])

const getContentImageSrc = (imgPath) => {
  return imgPath;  // ใช้พาธที่กำหนดไว้ใน array `detailCard`
};

const mainContentData = ref([
  { img: "/images/image 1560.jpg", date: "24 พ.ค. 2567", content: "โครงการแลกเปลี่ยนเรียนรู้ Clinical Observershipสำหรับนักศึกษาแพทย์จากญี่ปุ่น" },
])
</script>

<style>
.text-container {
  width: 60%;
  /* หรือกำหนดเป็น % หรือ px ตามขนาดที่ต้องการ */
  overflow: hidden;
}

.text-ellipsis {
  white-space: nowrap;
  /* ไม่ให้ข้อความตัดบรรทัด */
  overflow: hidden;
  /* ซ่อนข้อความที่เกิน */
  text-overflow: ellipsis;
  /* แสดง ... เมื่อข้อความเกิน */
}

.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}

.card-item {
  flex: 1 1 45%;
  min-width: 400px;
  margin-bottom: 15px;

}

.icons-underline-small {
  display: none;
}

.sm-icon {
  display: none;

}



@media (max-width: 650px) {
  .card-container {
    flex-direction: column;
    align-items: center;


  }

  .card-item-order {
    flex-direction: column;
    align-items: center;
    gap: 5px;


  }

  .sm-text {
    position: relative;
    align-items: start;
    width: 60%;
    margin-top: 3%;
    gap: 0;



  }

  .hide {
    display: none;

  }

  .card-item {
    width: 100%;
    margin-bottom: 15px;

  }



  .main-content img {
    width: 80%;
    height: auto;
    padding-inline: 10%;
  }

  .main-content img.no-style {
    width: 30rem;
    height: auto;
    padding-inline: 10%;
  }

  .main-content img.calender-style {
    width: 1rem;
    height: auto;
    padding-inline: 0%;
  }




  .small-button {
    position: relative;
    width: 50%;
    height: 7vw;
    margin-top: 15px;
    right: 0;
    justify-content: center;
    font-size: 3vw;
  }

  .small-view {
    flex-direction: column;
    align-items: center;

  }

  .icons-underline-normal {
    display: none;
  }

  .icons-underline-small {
    display: block;
  }

  .sm-icon {
    display: flex;
  }

  .nm-icon {
    display: none;
  }
}
</style>

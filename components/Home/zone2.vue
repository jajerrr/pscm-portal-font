<template>

  <div class="main-content second-main-content">

    <div class="col-center" id="zone2">
      <h class="header">News</h>
      <div class="f-center flex-glow w-full relative small-view">
        <h1 class=" th-header">ข่าวสารประชาสัมพันธ์</h1>
        <div class="sm-icon">
          <img src="assets/images/zone2/underline.png" class="no-style" />
        </div>
        <button type="button"
          class=" transition ease-in-out absolute f-center button-orange right-[5%] SF-TH text-[15px] px-[3%] py-[1%] space-x-2 small-button">
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

    <div class="f-center ">
      <div v-for="(left, index) in newsStore.mainContentData" :key="index"
        class="f-row gap-[5%] mt-[5%] card-container-zone-2 p-[5%]">

        <div class="f-col content-w-re card-item hide" id="zone2-2">


          <div class="content-re SF-TH cursor-pointer">
            <div class="">
  <img :src="getContentImageSrc(left.img)" class="h-auto w-[80vw] transition ease-in-out inner-img" />
</div>
            <div class="f-col gap-3 absolute mt-[40%] p-[5%]">
              <p class="bt-orange hide">มาใหม่ล่าสุด</p>
              <div class="i-center sm-icon">
                <img src="assets/images/zone2/calendar.png" class="w-[1vw]" />
                <p class="text-[15px]  px-2 text-white">{{ left.date }}</p>
              </div>
              <div class="text-container">
                <p class="text-[15px] SF-TH-Semi text-white text-ellipsis   hover:underline">
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

        <div class="f-col image-full gap-7 SF-TH card-item cursor-pointer" id="zone2-3">
          <div class="i-center gap-10 card-item-order sm-icon">
            <img :src="getContentImageSrc(left.img)" class="transition ease-in-out w-[30%] h-auto  inner-img" alt="news image1" />
            <div class="f-col gap-3 sm-text">
              <p class="new-bt hide">มาใหม่ล่าสุด</p>
              <div class="i-center sm-icon">
                <img src="assets/images/zone2/calender_right.png" class="calender-style" />
                <p class="z-2-date">{{ left.date }}</p>
              </div>
              <div class="text-container">
                <p class="transition ease-in-out z-2-text text-ellipsis  hover:text-[#212398]">
                  {{ left.content }}
                </p>
              </div>
              <div class="i-center nm-icon">
                <img src="assets/images/zone2/calender_right.png" class="w-[1.5vw]" />
                <p class="z-2-date">{{ left.date }}</p>
              </div>
            </div>
          </div>

          <div v-for="(right, index) in newsStore.rightContentData" :key="index"
            class="i-center gap-10 card-item-order">
            
            <img :src="getContentImageSrc(right.img)" class="transition ease-in-out w-[30%] h-auto inner-img" alt="image" />
            <div class="f-col gap-3 sm-text">
              <p class="new-bt hide">มาใหม่ล่าสุด</p>
              <div class="i-center sm-icon">
                <img src="assets/images/zone2/calender_right.png" class="calender-style" />
                <p class="z-2-date">{{ right.date }}</p>
              </div>
              <div class="text-container">
                <p class="transition ease-in-out z-2-text text-ellipsis hover:text-[#212398] hover:underline">
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
import { useNewsStore } from '@/stores/contentNews.ts';  // นำเข้า Pinia store

const newsStore = useNewsStore();  // ใช้ store จาก Pinia

const getContentImageSrc = (imgPath) => {
  return imgPath;  // ใช้พาธที่กำหนดไว้ใน array
};
</script>

<style>


.img-wrapper {

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius:20px;
}

.inner-img {
  transition: transform 0.3s ease;
}

.inner-img:hover {
  transform: scale(1.1);
}

.text-container {
  width: 70%;
  overflow: hidden;
}

.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}



.card-item {
  flex: 1 1 55%;
  max-width: 800px;
    margin-bottom: 15px;

}

.icons-underline-small {
  display: none;
}

.sm-icon {
  display: none;

}

.card-container-zone-2 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; /* ค่าเริ่มต้น: ไม่ให้ wrap */
}

@media (max-width: 1200px) {
  .card-container-zone-2 {
    flex-wrap: wrap; /* เปิดการ wrap เมื่อหน้าจอแคบกว่า 1200px */
    justify-content: center;
  }
}



@media (max-width: 850px) {
  .card-container-zone-2 {
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
    width: 20rem;
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
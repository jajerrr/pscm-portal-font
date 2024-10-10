<template>
  <div class='content-sm'>
    <HomeZone3Sm />
  </div>

  <div class="third-main-content content-nm mb-[30%] bg-[#F3F7FD]">
    <div class="f-col ml-[15%] mt-[15%] SF-TH-Semi">
      <li class="th-header">รอบรู้กับ</li>
      <p class="text-[1rem]">ราชวิทยาลัยจุฬาพรณ์</p>
    </div>

    <div class="f-center mt-[5%] mb-[20%] z-[13]" style="max-width: 1600px">
      <div class="j-center items-stretch h-auto mt-[10%]">
        <div class="absolute w-1/2 mt-[-10%]">
          <div class="f-re text-[#4D5986] SF-TH-Semi" >
            <img src="assets/images/zone3/lift-zone3.svg" class="image-full-ab mt-[2vw]" />

            <div class="j-center absolute w-full circle-position z-[1] SF-TH-Semi">
              <HomeCircle class="z-[10] " />
            

            </div>
          </div>
        </div>

        <div class="f-col image-full-re mt-[16vw] px-[5%]" alt="content">
          <div class="relative j-center z-[10]">
            <div class="f-col top-[4vw] right-[3.5vw] absolute max-w-[8vw]">
              <div class="space-y-4">
                <img class="img-z-3-col" src="assets/images/zone3/sm-photo.png" alt="1" />
                <img class="img-z-3-col" src="assets/images/zone3/sm-photo.png" alt="2" />
                <img class="img-z-3-col" src="assets/images/zone3/sm-photo.png" alt="3" />              </div>
            </div>

            <!-- แสดงเนื้อหาตามชั้นที่เลือก -->
            <div v-if="activeRoom"
            class="f-col absolute top-[10%] left-[5%] gap-1">
              <div class="text-[2vw] SF-TH-Semi">{{ activeRoom.name }}</div>
              <p class="text-[1.5vw]">กิจกรรมภายในห้อง</p>
              <div class="f-row gap-5">
                <div class="f-col f-center">
                  <img :src="getImageSrc(activeRoom.iconImg1)" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ activeRoom.iconName1 }}</div>
                </div>
                <div class="f-col f-center">
                  <img :src="getImageSrc(activeRoom.iconImg2)" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ activeRoom.iconName2 }}</div>
                </div>
              </div>
            </div>
            

            <img :src="roomFloorSrc" class="flex w-[45vw] absolute" alt="ห้อง" />

            <img src="assets/images/Rectangle-zone3.png" class="w-full" />
          </div>
        </div>
      </div>
    </div>

    <img src="assets/images/zone3/Vector 87.svg" class="image-full-ab top-[-10vw] z-[-1]" alt="wave-top" />
    <img src="assets/images/zone3/Clip path group.svg" class="image-ab top-[-25%] right-[-8%] w-[30%] z-[1]"
      alt="right" />
    <img src="assets/images/zone3/Group 1000003307.svg" class="image-ab top-[4%] left-[-28%] w-[55%] z-[1]"
      alt="left" />
    <img src="assets/images/zone3/Groupfloor.svg" class="image-full-ab bottom-[-6vw] z-[1]" alt="floor" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useItemStore } from '@/stores/item.ts'  // นำเข้า Pinia store

// ใช้ store เพื่อดึงค่า activeItem
const itemStore = useItemStore()

// ข้อมูลห้องทั้งหมดที่จะแสดง
const Room = ref([
  { name: "ห้อง1", iconName1: "นิทรรศการอวัยวะ1", iconName2: "เรียนรู้อวัยวะต่างๆ1" ,iconImg1 : "/images/zone3/iconzone3-1.svg" , iconImg2 : "/images/zone3/iconzone3-2.svg"},
  { name: "ห้อง2", iconName1: "นิทรรศการอวัยวะ2", iconName2: "เรียนรู้อวัยวะต่างๆ2" ,iconImg1 : "/images/zone3/iconzone3-2.svg" , iconImg2 : "/images/zone3/iconzone3-1.svg"},
  { name: "ห้อง3", iconName1: "นิทรรศการอวัยวะ3", iconName2: "เรียนรู้อวัยวะต่างๆ3" ,iconImg1 : "/images/zone3/iconzone3-1.svg" , iconImg2 : "/images/zone3/iconzone3-2.svg"},
  { name: "ห้อง4", iconName1: "นิทรรศการอวัยวะ4", iconName2: "เรียนรู้อวัยวะต่างๆ4" ,iconImg1 : "/images/zone3/iconzone3-2.svg" , iconImg2 : "/images/zone3/iconzone3-1.svg"},
  { name: "ห้อง5", iconName1: "นิทรรศการอวัยวะ5", iconName2: "เรียนรู้อวัยวะต่างๆ5" ,iconImg1 : "/images/zone3/iconzone3-1.svg" , iconImg2 : "/images/zone3/iconzone3-2.svg"},
  { name: "ห้อง6", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6" ,iconImg1 : "/images/zone3/iconzone3-2.svg" , iconImg2 : "/images/zone3/iconzone3-1.svg"},
  { name: "ห้อง7", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6" ,iconImg1 : "/images/zone3/iconzone3-1.svg" , iconImg2 : "/images/zone3/iconzone3-2.svg"},
  { name: "ห้อง8", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6" ,iconImg1 : "/images/zone3/iconzone3-2.svg" , iconImg2 : "/images/zone3/iconzone3-1.svg"},

])

// คำนวณ path ของรูปภาพที่จะแสดงตาม activeItem จาก store
const roomFloorSrc = computed(() => {
  const roomImages = ([
   
    "/images/zone3/room-sm.png",
    "/images/zone3/roomZone3.jpg",
    "/images/zone3/room-sm.png",
    "/images/zone3/roomZone3.jpg",
    "/images/zone3/room-sm.png",
    "/images/zone3/roomZone3.jpg",
    "/images/zone3/room-sm.png",
    "/images/zone3/roomZone3.jpg",
  ])
  return roomImages[itemStore.activeItem]  
})

//  activeItem
const activeRoom = computed(() => {
  return Room.value[itemStore.activeItem]  // ใช้ค่า activeItem เพื่อดึงห้องที่ตรงกัน
})

const getImageSrc = (imgPath) => {
  return imgPath;  
};
</script>


<style>
.content-sm {
  display: none;
}


.circle-position{
    margin-top:0;
  }

@media (min-width: 1200px){
  .circle-position{
    margin-top: -2vw;
  }
}

/* @media (min-width: 1440px){
  .circle-position{
    margin-top: -8vw;
  }
} */

@media (min-width: 1650px){
  .circle-position{
    margin-top: -12vh;
  }
}

@media (max-width: 950px){
  .circle-position{
    margin-top: -13vw;
  }
}

@media (max-width: 750px){
  .circle-position{
    margin-top: -15vw;
  }
}


@media (max-width:700px) {

  .content-sm {
    display: contents;
  }

  .content-nm {
    display: none;
  }

}
</style>
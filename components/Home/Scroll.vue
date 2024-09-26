<template>
  <div class='content-sm'>
    <HomeZone3Sm />
  </div>

  <div class="third-main-content content-nm mb-[30%] bg-[#F3F7FD]">
    <div class="f-col ml-[15%] mt-[15%] SF-TH-Semi">
      <li class="th-header">รอบรู้กับ</li>
      <p class="text-[1rem]">ราชวิทยาลัยจุฬาพรณ์</p>
    </div>

    <div class="f-center mt-[5%] mb-[20%] z-[13]">
      <div class="j-center items-stretch h-auto mt-[10%]">
        <div class="absolute w-1/2 mt-[-10%]">
          <div class="f-re text-[#4D5986] SF-TH-Semi" style="max-width: 1800px">
            <img src="assets/images/zone3/lift-zone3.svg" class="image-full-ab" />

            <div class="j-center absolute w-full mt-[-10%] z-[1] SF-TH-Semi">
              <HomeCircle class="z-[10] " />
            

            </div>
          </div>
        </div>

        <div class="f-col image-full-re mt-[16vw] px-[5%]" alt="content">
          <div class="relative j-center z-[10]">
            <div class="f-col top-[4vw] right-[3.5vw] absolute max-w-[8vw]">
              <div class="space-y-4">
                <img class="img-z-3-col" src="assets/images/zone3/sm-photo.png" alt="" />
                <img class="img-z-3-col" src="assets/images/zone3/sm-photo.png" alt="" />
                <img class="img-z-3-col" src="assets/images/zone3/sm-photo.png" alt="" />
                <img class="img-z-3-col" src="assets/images/zone3/sm-photo.png" alt="" />
                <div class="f-center">
                  <img class="img-z-3-col relative" src="assets/images/zone3/morephoto.png" alt="" />
                  <p class="absolute text-white">+2</p>
                </div>
              </div>
            </div>

            <!-- แสดงเนื้อหาตามชั้นที่เลือก -->
            <div v-if="activeRoom"
            class="f-col absolute top-[10%] left-[5%] gap-1">
              <div class="text-[2vw] SF-TH-Semi">{{ activeRoom.name }}</div>
              <p class="text-[1.5vw]">กิจกรรมภายในห้อง</p>
              <div class="f-row gap-5">
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-1.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ activeRoom.iconName1 }}</div>
                </div>
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-2.svg" class="w-[50%] h-auto" />
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
  { name: "ห้อง1", iconName1: "นิทรรศการอวัยวะ1", iconName2: "เรียนรู้อวัยวะต่างๆ1" },
  { name: "ห้อง2", iconName1: "นิทรรศการอวัยวะ2", iconName2: "เรียนรู้อวัยวะต่างๆ2" },
  { name: "ห้อง3", iconName1: "นิทรรศการอวัยวะ3", iconName2: "เรียนรู้อวัยวะต่างๆ3" },
  { name: "ห้อง4", iconName1: "นิทรรศการอวัยวะ4", iconName2: "เรียนรู้อวัยวะต่างๆ4" },
  { name: "ห้อง5", iconName1: "นิทรรศการอวัยวะ5", iconName2: "เรียนรู้อวัยวะต่างๆ5" },
  { name: "ห้อง6", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6" },
  { name: "ห้อง7", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6" },
  { name: "ห้อง8", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6" },

])

// คำนวณ path ของรูปภาพที่จะแสดงตาม activeItem จาก store
const roomFloorSrc = computed(() => {
  const roomImages = [
    "/images/roomZone3.jpg",
    "/images/room-sm.png",
    "/images/roomZone3.jpg",
    "/images/room-sm.png",
    "/images/roomZone3.jpg",
    "/images/room-sm.png",
    "/images/roomZone3.jpg",
    "/images/room-sm.png",
  ]
  return roomImages[itemStore.activeItem]  // เปลี่ยนรูปตาม activeItem
})

// แสดงข้อมูลห้องตาม activeItem
const activeRoom = computed(() => {
  return Room.value[itemStore.activeItem]  // ใช้ค่า activeItem เพื่อดึงห้องที่ตรงกัน
})
</script>


<style>
.content-sm {
  display: none;
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
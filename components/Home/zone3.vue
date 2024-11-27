<template>
  <div class='content-sm'>
    <HomeZone3Sm />
  </div>

  <div class="third-main-content content-nm mb-[10%] bg-[#F3F7FD]" >
    <div class="f-col ml-[15%] mt-[15%] SF-TH-Semi">
      <li class=" text-[2vw]">รอบรู้กับ</li>
      <p class="text-[1.5vw]">ราชวิทยาลัยจุฬาพรณ์</p>
    </div>

    <div class="f-center mt-[5%] mb-[20%] z-[13]"  >
      <div class="j-center items-stretch h-auto mt-[10%]">
        <div class="absolute w-1/2 mt-[-10%]">
          <div class="f-re text-[#4D5986] SF-TH-Semi" >
            <img src="assets/images/zone3/lift-zone3.svg" class="image-full-ab mt-[2vw]" />

            <div class="j-center absolute w-full circle-position z-[1] SF-TH-Semi">
              <HomeCircle class="z-[10]" />
            

            </div>
          </div>
        </div>

        <div class="f-col image-full-re mt-[14vw] " alt="content">
          <div class="relative j-center z-[10]">
            <div  class="f-col top-[3vw] right-[4%] absolute max-w-[8vw] gap-9">
              <div
      v-for="(image, index) in roomNumber[itemStore.activeItem].room"
      :key="index"
      @click="selectFloor(index)"
      class="f-col SF-TH f-center overflow-hidden w-[8vw] h-[5vw] rounded-[10px] bg-[#69696954]"
    >
      <img :src="image" class="cursor-pointer img-z-3-col" alt="Room Image" />
    </div>
            </div>

            <!-- แสดงเนื้อหาตามชั้นที่เลือก -->
            <div v-if="activeRoom"
            class="f-col absolute top-[10%] left-[5%] gap-1">
              <div class="text-[1.5vw] SF-TH-Semi">{{ activeRoom.name }}</div>
              <p class="text-[1.2vw]">กิจกรรมภายในห้อง</p>
              <div class="f-row gap-5">
                <div class="f-col f-center">
                  <img :src="getImageSrc(activeRoom.iconImg1)" class="w-[40%] h-auto" />
                  <div class="text-[1vw]">{{ activeRoom.iconName1 }}</div>
                </div>
                <div class="f-col f-center">
                  <img :src="getImageSrc(activeRoom.iconImg2)" class="w-[40%] h-auto" />
                  <div class="text-[1vw]">{{ activeRoom.iconName2 }}</div>
                </div>
              </div>
            </div>
            

            <img :src="roomImageSrc"  class="flex w-[45vw]   absolute top-[3%]" style="padding-inline:3vw ;" alt="ห้อง" />

            <img src="assets/images/Rectangle-zone3.png" class="w-[85vw]" />
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



//  activeItem
const activeRoom = computed(() => {
  return Room.value[itemStore.activeItem];  // ใช้ค่า activeItem เพื่อดึงห้องที่ตรงกัน
})

const getImageSrc = (imgPath) => {
  return imgPath;
};

// ข้อมูลรูปภาพของห้องแต่ละชั้น
const roomNumber = ref([
  { room: ["/images/zone3/roomZone3.jpg", "/images/zone3/image-1575.jpg", ] },
  { room: ["/images/zone3/image-1575.jpg", "/images/zone3/roomZone3.jpg", ] },
  { room: ["/images/zone2/new-2.png", "/images/zone3/roomZone3.jpg", ] }, 
  { room: ["/images/zone2/new-3.png", "/images/zone3/image-1575.jpg", ] },
  { room: ["/images/image 1560.jpg", "/images/zone3/roomZone3.jpg", ] },  
  { room: ["/images/zone3/roomZone3.jpg", "/images/zone3/image-1575.jpg", ] },
  { room: ["/images/zone3/image-1575.jpg", "/images/zone3/roomZone3.jpg", ] },
  { room: ["/images/zone3/roomZone3.jpg", "/images/zone3/image-1575.jpg", ] },  


]);

const selectedFloor = ref(0); // เก็บสถานะชั้นที่เลือก

// คำนวณ path ของรูปภาพที่จะแสดงตามชั้นที่เลือกและ activeItem
const roomImageSrc = computed(() => {
  return roomNumber.value[itemStore.activeItem].room[selectedFloor.value]; // ดึงรูปตาม activeItem และชั้นที่เลือก
});



// ฟังก์ชันสำหรับเลือกชั้น
const selectFloor = (index) => {
  selectedFloor.value = index; // อัพเดทชั้นที่เลือก
};
</script>


<style>
.content-sm {
  display: none;
}


.circle-position{
    margin-top:-10vw;
  }

@media (min-width: 1250px){
  .circle-position{
    margin-top: -5vw;
  }
}

/* @media (min-width: 1440px){
  .circle-position{
    margin-top: -8vw;
  }
} */

@media (min-width: 1500px){
  .circle-position{
    margin-top: -12vh;
  }
}


@media (width: 1950px){
  .circle-position{
    margin-top: -7vw;
  }
}

@media (max-width: 1000px){
  .circle-position{
    margin-top: -10vw;
  }
}

@media (max-width: 850px){
  .circle-position{
    margin-top: -33vw;
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
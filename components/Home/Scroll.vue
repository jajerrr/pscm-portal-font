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
              <!-- <div class="j-center absolute w-full mt-[10%] z-10 SF-TH-Semi">
                <button @click="selectFloor(3)" type="button" :class="{
                  'bg-[#FF7A00]': selectedFloor === 3,  // สีปุ่มเมื่อเลือก
                  'bg-white hover:bg-yellow-500': selectedFloor !== 3  // สีปุ่มที่ไม่ได้ถูกเลือก
                }" class="w-[5vw] h-[5vw] z-3-bt">
                  ชั้น<br />03
                </button>
              </div>

              <div class="j-center absolute w-full mt-[17%] z-10">
                <div class="w-1/2 f-center">
                  <button @click="selectFloor(2)" type="button" :class="{
                    'bg-[#FF7A00]': selectedFloor === 2,  // สีปุ่มเมื่อเลือก
                    'bg-white hover:bg-yellow-500': selectedFloor !== 2  // สีปุ่มที่ไม่ได้ถูกเลือก
                  }" class="w-[5vw] h-[5vw] z-3-bt">
                    ชั้น<br />02
                  </button>
                </div>
                <div class="w-1/2 f-center">
                  <button @click="selectFloor(4)" type="button" :class="{
                    'bg-[#FF7A00]': selectedFloor === 4,  // สีปุ่มเมื่อเลือก
                    'bg-white hover:bg-yellow-500': selectedFloor !== 4  // สีปุ่มที่ไม่ได้ถูกเลือก
                  }" class="w-[5vw] h-[5vw] z-3-bt">
                    ชั้น<br />04
                  </button>
                </div>
              </div>

              <div class="flex w-full mt-[30%] z-10">
                <div class="j-center w-1/5" style="justify-content: flex-end">
                  <button @click="selectFloor(1)" type="button" :class="{
                    'bg-[#FF7A00]': selectedFloor === 1,  // สีปุ่มเมื่อเลือก
                    'bg-white hover:bg-yellow-500': selectedFloor !== 1  // สีปุ่มที่ไม่ได้ถูกเลือก
                  }" class="w-[5vw] h-[5vw] z-3-bt">
                    ชั้น<br />01
                  </button>
                </div>
                <div class="j-center w-1/5"></div>
                <div class="j-center w-1/5 mt-[10%]">
                  <h class="text-white text-[2vw] SF-TH-Semi">Floor</h>
                </div>
                <div class="j-center w-1/5"></div>

                <div class="j-center w-1/5" style="justify-content: flex-start">
                  <button @click="selectFloor(0)" type="button" :class="{
                    'bg-[#FF7A00]': selectedFloor === 5,  // สีปุ่มเมื่อเลือก
                    'bg-white hover:bg-yellow-500': selectedFloor !== 5  // สีปุ่มที่ไม่ได้ถูกเลือก
                  }" class="w-[5vw] h-[5vw] z-3-bt">
                    ชั้น<br />05
                  </button>
                </div>



              </div> -->

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
            <div v-if="selectedFloor === 1" class="f-col absolute top-[10%] left-[5%] gap-1">
              <div class="text-[2vw] SF-TH-Semi">{{ Room[0].name }}</div>
              <p class="text-[1.5vw]">กิจกรรมภายในห้อง</p>
              <div class="f-row gap-5">
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-1.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[0].iconName1 }}</div>
                </div>
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-2.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[0].iconName2 }}</div>
                </div>
              </div>
            </div>
            <div v-if="selectedFloor === 2" class="f-col absolute top-[10%] left-[5%] gap-1">
              <div class="text-[2vw] SF-TH-Semi">{{ Room[1].name }}</div>
              <p class="text-[1.5vw]">กิจกรรมภายในห้อง</p>
              <div class="f-row gap-5">
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-1.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[1].iconName1 }}</div>
                </div>
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-2.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[1].iconName2 }}</div>
                </div>
              </div>
            </div>
            <div v-if="selectedFloor === 3" class="f-col absolute top-[10%] left-[5%] gap-1">
              <div class="text-[2vw] SF-TH-Semi">{{ Room[2].name }}</div>
              <p class="text-[1.5vw]">กิจกรรมภายในห้อง</p>
              <div class="f-row gap-5">
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-1.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[2].iconName1 }}</div>
                </div>
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-2.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[2].iconName2 }}</div>
                </div>
              </div>
            </div>
            <div v-if="selectedFloor === 4" class="f-col absolute top-[10%] left-[5%] gap-1">
              <div class="text-[2vw] SF-TH-Semi">{{ Room[3].name }}</div>
              <p class="text-[1.5vw]">กิจกรรมภายในห้อง</p>
              <div class="f-row gap-5">
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-1.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[3].iconName1 }}</div>
                </div>
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-2.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[3].iconName2 }}</div>
                </div>
              </div>
            </div>
            <div v-if="selectedFloor === 5" class="f-col absolute top-[10%] left-[5%] gap-1">
              <div class="text-[2vw] SF-TH-Semi">{{ Room[4].name }}</div>
              <p class="text-[1.5vw]">กิจกรรมภายในห้อง</p>
              <div class="f-row gap-5">
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-1.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[4].iconName1 }}</div>
                </div>
                <div class="f-col f-center">
                  <img src="assets/images/iconzone3-2.svg" class="w-[50%] h-auto" />
                  <div class="text-[1vw]">{{ Room[4].iconName2 }}</div>
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
import { ref } from 'vue';

const Room = ref([

  { name: "ห้อง1", iconName1: "นิทรรศการอวัยวะ1", iconName2: "เรียนรู้อวัยวะต่างๆ1" },
  { name: "ห้อง2", iconName1: "นิทรรศการอวัยวะ2", iconName2: "เรียนรู้อวัยวะต่างๆ2" },
  { name: "ห้อง3", iconName1: "นิทรรศการอวัยวะ3", iconName2: "เรียนรู้อวัยวะต่างๆ3" },
  { name: "ห้อง4", iconName1: "นิทรรศการอวัยวะ4", iconName2: "เรียนรู้อวัยวะต่างๆ4" },
  { name: "ห้อง5", iconName1: "นิทรรศการอวัยวะ5", iconName2: "เรียนรู้อวัยวะต่างๆ5" },
  { name: "ห้อง6", iconName1: "นิทรรศการอวัยวะ6", iconName2: "เรียนรู้อวัยวะต่างๆ6" },


]);

const selectedFloor = ref(4); // เริ่มต้นที่ชั้น 3

function selectFloor(floor) {
  console.log('Selected Floor:', floor); // ตรวจสอบว่าฟังก์ชันถูกเรียกไหม
  selectedFloor.value = floor;
}



// คำนวณ path ของรูปภาพที่จะแสดงตามชั้นที่เลือก
const roomFloorSrc = computed(() => {
  return `/images/${roomZone3.value[selectedFloor.value].room}`;
});

const roomZone3 = ref([
  { room: "roomZone3.jpg" },
  { room: "room-sm-2.jpg" },
  { room: "roomZone3.jpg" },
  { room: "room-sm-2.jpg" },
  { room: "roomZone3.jpg" }
]);
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
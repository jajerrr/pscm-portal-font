<template>
  <div class="content-w-re">
    <div class="f-col ml-[5%] mt-[15%] SF-TH-Semi">
      <li class="th-header">รอบรู้กับ</li>
      <p class="text-[100%]">ราชวิทยาลัยจุฬาภรณ์</p>
    </div>
    <div class="f-row mt-[15%] mb-[20%] j-center items-stretch h-auto">
      <div class="absolute w-full mt-[-10%] mb-[50%] f-center">
        <div class="f-re text-white SF-TH-Semi gap-3">
          <div
            v-for="(id, index) in floorNumber"
            :key="index"
            @click="selectFloor(index)"
            class="f-col SF-TH f-center w-[15vw] h-[15vw] rounded-[10px]"
            :class="{
              'bg-[#FF7A00]': selectedFloor === index,  // สีปุ่มเมื่อเลือก
              'bg-gray-300  hover:bg-yellow-500 ': selectedFloor !== index // สีเทาสำหรับปุ่มที่ไม่ได้ถูกเลือก
            }"
          >
            <h class="text-[3vw]">{{ id.header }}</h>
            <h
              :class="[
                'text-[3vw] bg-white rounded-[4px] j-center w-[8vw] border-white',
                selectedFloor === index ? 'text-[#FF7A00]' : 'text-gray-500'
              ]"
            >
              {{ id.number }}
            </h>
          </div>
        </div>
      </div>

      <!-- Section สำหรับแสดงรูปภาพห้องที่เปลี่ยนไปตามชั้นที่เลือก -->
      <div class="absolute w-full mt-[7%] p-[5%]">
        <img 
          :src="roomImageSrc" 
          class="image-full-re z-[6]"
          alt="room"
        />
      </div>

      <!-- ****white box**** -->
      <div class="relative j-center z-[5] mt-[70%]">
        <div class="f-col f-center absolute top-[15%] gap-3">
          <p class="text-[4vw] SF-TH-Semi">ห้องสโม</p>
          <p class="text-[3.5vw]">กิจกรรมภายในห้อง</p>
          <div class="f-row gap-5">
            <div class="f-col f-center">
              <img src="assets/images/iconzone3-1.svg" class="w-[7vw] h-auto" />
              <p class="text-[3vw]">นิทรรศการอวัยวะ</p>
            </div>
            <div class="f-col f-center">
              <img src="assets/images/iconzone3-2.svg" class="w-[7vw] h-auto" />
              <p class="text-[3vw]">เรียนรู้อวัยวะต่างๆ</p>
            </div>
          </div>
        </div>

        <img
          src="assets/images/Rectangle-zone3.png"
          class="w-[80vw] h-[40vw] px-[10%]"
        />
      </div>
    </div>
    <img
      src="assets/images/zone3/Vector 87.svg"
      class="image-full-ab top-[-10vw] z-[-1]"
      alt="wave-top"
    />
    <img
      src="assets/images/zone3/floor-sm.png"
      class="image-full-ab bottom-[-5vw] z-[1]"
      alt="floor"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const floorNumber = ref([
  { header: "ชั้น", number: "01" },
  { header: "ชั้น", number: "02" },
  { header: "ชั้น", number: "03" },
  { header: "ชั้น", number: "04" },
  { header: "ชั้น", number: "05" }
]);

const roomNumber = ref([
  { room: "room-sm.png" },
  { room: "room-sm-2.jpg" },
  { room: "image-1575.jpg" },
  { room: "room-sm.png" },
  { room: "room-sm-2.jpg" }
]);

const selectedFloor = ref(0); // เก็บสถานะชั้นที่เลือก

// คำนวณ path ของรูปภาพที่จะแสดงตามชั้นที่เลือก
const roomImageSrc = computed(() => {
  return `/images/${roomNumber.value[selectedFloor.value].room}`;
});

const selectFloor = (index) => {
  selectedFloor.value = index; // อัพเดทชั้นที่เลือก
};
</script>

<style scoped>
/* เพิ่มเติมการปรับสีพื้นหลังของปุ่มใน style scoped */
.bg-gray-300 {
  background-color: #D1D5DB;
}



.hover\:bg-yellow-500:hover {
  background-color: #FCD34D;
}
</style>

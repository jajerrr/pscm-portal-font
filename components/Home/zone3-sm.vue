<template>
  <div class="content-w-re">
    <div class="f-col ml-[5%] mt-[15%] SF-TH-Semi">
      <li class="th-header">รอบรู้กับ</li>
      <p class="text-[100%]">ราชวิทยาลัยจุฬาพรณ์</p>
    </div>
    <div class="f-row mt-[15%] mb-[20%] j-center items-stretch h-auto">
      
      <div class="absolute w-full mt-[-10%] mb-[50%] f-center">
        <div class="f-re text-white SF-TH-Semi gap-3">
          <div
            class="f-col SF-TH bg-[#FF7A00] hover:bg-yellow-500 f-center w-[15vw] h-[15vw] rounded-[10px]"
            v-for="(id, index) in floorNumber" :key="index"
          >
            <h class ="text-[3vw]">{{ id.header }}</h>
            <h
              class="text-[#FF7A00] text-[3vw] bg-white rounded-[4px] j-center  w-[8vw] border-white"
              >{{ id.number }}</h
            >
          </div>
        </div>
      </div>
      <div class = "absolute w-full mt-[7%] p-[5%]">
        <img src="assets/images/zone3/room-sm.png"
        class="image-full-re z-[6]"/>
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
          class="w-[80vw] h-[40vw] px-[10%] "
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
const floorNumber = ref([
  {
    header: "ชั้น",
    number: "01" },
    {
    header: "ชั้น",
    number: "02" },
    {
    header: "ชั้น",
    number: "03" },
    {
    header: "ชั้น",
    number: "04" },
    {
    header: "ชั้น",
    number: "05" },
]);
</script>

<style></style>

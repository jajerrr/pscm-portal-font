<template>
    <div class="w-full bg-white  p-6 ">
      <!-- ✅ ส่วนหัว (Title + Dropdown) -->
      <div class="flex justify-between items-center mb-5">
        <h2 class="text-xl font-semibold text-gray-800">Ranking Point</h2>
  
        <!-- Dropdown Filter -->
        <div class="relative">
          <select
            v-model="selectedFilter"
            class="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none"
          >
            <option value="ทั้งหมด">ทั้งหมด</option>
            <option value="อันดับ">อันดับ</option>
            <option value="หลักสูตร">หลักสูตร</option>
          </select>
        </div>
      </div>
  
      <!-- ✅ ตาราง Ranking -->
      <div class=" p-4 rounded-lg">
        <!-- หัวตาราง -->
        <div class="grid grid-cols-4 gap-4 font-semibold text-gray-600 px-4 py-2">
          <div>ลำดับ</div>
          <div>ชื่อ-นามสกุล</div>
          <div>หลักสูตร</div>
          <div class="text-right">คะแนน</div>
        </div>
  
        <!-- รายการ Ranking -->
        <div
          v-for="(user, index) in rankingData"
          :key="index"
          class="grid grid-cols-4 gap-4 items-center bg-white  p-4  mb-2 border-[1px] border-[#fbfbfb] rounded-xl text-[#6F6B6B] shadow-lg"
        >
          <!-- อันดับ -->
          <div class="text-lg font-semibold text-gray-700">
  <span
    :class="{
      'bg-yellow-400 text-white': index === 0,  /* อันดับ 1 (สีเหลือง) */
      'bg-gray-400 text-white': index === 1,   /* อันดับ 2 (สีเทา) */
      'bg-orange-400 text-white': index === 2, /* อันดับ 3 (สีส้ม) */
      'text-gray-700': index >= 3              /* อันดับ 4 ขึ้นไป (สีเทาปกติ) */
    }"
    class="px-3 py-1 rounded-full"
  >
    {{ index + 1 }}
  </span>
  <span v-if="index >= 3">th</span>
</div>


  
          <!-- ชื่อ + รูป -->
          <div class="flex items-center space-x-3">
            <img
              :src="user.image"
              alt="Profile"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p class="font-semibold text-gray-800">{{ user.name }}</p>
              <p class="text-sm text-gray-500">{{ user.department }}</p>
            </div>
          </div>
  
          <!-- หลักสูตร -->
          <div class="text-gray-600">{{ user.course }}</div>
  
          <!-- คะแนน -->
          <!-- <div class="bg-[#FFF6EE] text-orange-500 font-semibold text-sm px-4 py-1 rounded-full text-right inline-block">
            {{ user.score }} เหรียญ
          </div> -->

          <div class="text-sm font-semibold text-right">
            <span class="bg-[#FFF6EE] text-orange-500 font-semibold text-sm px-4 py-1 rounded-full  inline-block">
              {{ user.score }} เหรียญ
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // ✅ เก็บค่าตัวกรอง
  const selectedFilter = ref("ทั้งหมด");
  
  // ✅ ตัวอย่างข้อมูล Ranking
  const rankingData = ref([
    {
      name: "เกตุคม นามาฟาร์ม",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      department: "รางวัลนักวิจัยดีเด่น",
      course: "หลักสูตรแพทยศาสตร์บัณฑิต (พ.ศ. 2563)",
      score: 1950,
    },
    {
      name: "ฐุินรัมเมศ ณ ลพบุรี",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      department: "รางวัลยอดเยี่ยมสาขาแพทย์",
      course: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาเวชศาสตร์การกีฬา",
      score: 1890,
    },
    {
      name: "ภุราเศ ศรีจันทร์ดี",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      department: "รางวัลนักวิจัยดีเด่น",
      course: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาเวชศาสตร์การกีฬา",
      score: 1850,
    },
    {
      name: "โลกณ คนกันเอง",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      department: "รางวัลนักศึกษา",
      course: "หลักสูตรทันตแพทยศาสตร์บัณฑิต",
      score: 900,
    },
    {
      name: "ณัฐธิดา สามโคก",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      department: "รางวัลนักศึกษา",
      course: "หลักสูตรทันตแพทยศาสตร์บัณฑิต",
      score: 890,
    },
  ]);
  </script>
  
<template>
  <NuxtLayout name="editmap">
    <topnav
      class="flex absolute top-5 w-full justify-center items-center text-white SF-TH nav-normal"
    >
      <div class="flex-grow flex justify-center">
        <div
          class="flex space-x-3 justify-center items-center bg-[rgba(34,33,33,0.45)] p-1 rounded-full text-white SF-TH"
        >
          <button
            class="hover:bg-slate-300 focus:bg-slate-200 p-1 rounded-full"
          >
            <img src="assets/images/map-content/Hanger.png" />
          </button>
          <button
            class="hover:bg-slate-300 focus:bg-slate-300 p-1 rounded-full"
          >
            <img src="assets/images/map-content/Settings.png" />
          </button>
        </div>
      </div>
      <NuxtLink to="/building" class="flex items-center absolute left-10 top-0">
    <!-- ปุ่มย้อนกลับ -->
    <div class="flex items-center gap-2 cursor-pointer">
      <div class="w-8 h-8 flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px">
          <path fill="#FFFFFF" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/>
        </svg>
      </div>
      <span class="text-white text-lg">Go back</span>
    </div>

    <!-- เส้นแบ่ง -->
    <div class="h-6 w-[1px] bg-white mx-4"></div>

    
    <div class="text-white text-lg">แผนที่</div>
  </NuxtLink>
    </topnav>
    <div
  v-for="(button, index) in buttons"
  :key="index"
  :ref="(el) => (buttonRefs[index] = el)"
  :style="{
    position: 'absolute',
    left: button.x + 'vw',  // แสดงเป็นเปอร์เซ็นต์
    top: button.y + 'vh',   // แสดงเป็นเปอร์เซ็นต์
  }"
  class="cursor-move"
  @mousedown="(event) => startDrag(event, index)"
>
  <button type="button" :class="button.class">
    <img
      class="w-[25px]"
      src="assets/images/map-content/Gamepad Minimalistic.png"
      alt="Gamepad"
    />
    <div class="text-sm Inter-Regular">{{ button.label }}</div>
  </button>
</div>


    <div class="absolute top-5 right-5 flex flex-row gap-2">
      <button
        @click="savePositions"
        class="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
      >
        Save Position
      </button>
      <button
        @click="resetPositions"
        class="px-4 py-2 bg-gray-600 text-white rounded shadow hover:bg-gray-700"
      >
        Reset Position
      </button>
    </div>
    <!-- <CardsCardCoverflow /> -->
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";

const buttons = ref([]);
const buttonRefs = ref([]);
let dragging = false;
let offsetX = 0;
let offsetY = 0;
let currentIndex = null;

const defaultPositions = () => {
  // คำนวณตำแหน่งเริ่มต้นในรูปแบบของเปอร์เซ็นต์
  const startX = (window.innerWidth - 350) / window.innerWidth * 100;  // คำนวณจาก viewport width
  const startY = (window.innerHeight - 70) / window.innerHeight * 100;  // คำนวณจาก viewport height

  return [
    {
      x: startX + 8,  // เพิ่มค่าเป็นเปอร์เซ็นต์
      y: startY,  // เพิ่มค่าเป็นเปอร์เซ็นต์
      label: "ปุ่ม 1",
      class:
        "px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 rounded-full",
    },
    {
      x: startX + 16,  // เพิ่มค่าเป็นเปอร์เซ็นต์
      y: startY,
      label: "ปุ่ม 2",
      class: "px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700 rounded-full",
    },
    {
      x: startX + 24,  // เพิ่มค่าเป็นเปอร์เซ็นต์
      y: startY,
      label: "ปุ่ม 3",
      class:
        "px-4 py-2 bg-yellow-600 text-white rounded shadow hover:bg-yellow-700 rounded-full",
    },
  ];
};


const startDrag = (event, index) => {
  dragging = true;
  currentIndex = index;
  offsetX = event.clientX - buttons.value[index].x;
  offsetY = event.clientY - buttons.value[index].y;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
};

const onDrag = (event) => {
  if (dragging && currentIndex !== null) {
    buttons.value[currentIndex].x = Math.min(
      Math.max((event.clientX / window.innerWidth) * 100, 0), // แปลงเป็นเปอร์เซ็นต์จากขนาดหน้าจอ
      95
    );
    buttons.value[currentIndex].y = Math.min(
      Math.max((event.clientY / window.innerHeight) * 100, 0), // แปลงเป็นเปอร์เซ็นต์จากขนาดหน้าจอ
      90
    );
  }
};
 

const stopDrag = () => {
  dragging = false;
  currentIndex = null;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
};

const savePositions = () => {
  localStorage.setItem("buttonPositions", JSON.stringify(buttons.value));
  alert("บันทึกแล้ว!");
};

const resetPositions = () => {
  buttons.value = defaultPositions();
  localStorage.removeItem("buttonPositions");
  alert("รีเซ็ตตำแหน่งปุ่มแล้ว!");
};

onMounted(() => {
  const savedPositions = JSON.parse(localStorage.getItem("buttonPositions"));
  buttons.value = savedPositions ? savedPositions : defaultPositions();
});
</script>

<style scoped>
.cursor-move {
  cursor: grab;
}
</style>
